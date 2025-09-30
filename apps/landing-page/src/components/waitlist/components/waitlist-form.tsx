import { Button } from '@devoyce/ui/components/button'
import { FC, memo } from 'react'
import { Resend } from 'resend'
import { WaitlistEmailTemplate } from './email-template'
import z from 'zod'

const WaitlistForm: FC = () => {
  async function send(formData: FormData) {
    'use server'
    const resend = new Resend(process.env.RESEND_API_KEY)

    const email = z.string().email().parse(formData.get('email'))

    if (!email) throw new Error('Email is invalid')

    const { data } = await resend.emails.send({
      from: 'Devoyce <business@devoyce.com>',
      to: email,
      subject: 'You are now on the waitlist! 🎉',
      react: WaitlistEmailTemplate(),
    })

    if (data?.id) {
      //
    }
  }

  return (
    <form action={send} className="mt-6 max-w-xl">
      <div className="flex gap-3 sm:grid-cols-3">
        <input
          type="email"
          name="email"
          placeholder="yourbest@email.com"
          className="focus:ring-primary bg-background h-11 flex-1 rounded-md border border-slate-300 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:col-span-1"
          required
        />
        <Button type="submit" size="lg">
          Request access
        </Button>
      </div>
      <p className="mt-3 text-xs text-slate-600">
        By signing up, you agree to receive product updates. Unsubscribe
        anytime.
      </p>
    </form>
  )
}

export default memo(WaitlistForm)
