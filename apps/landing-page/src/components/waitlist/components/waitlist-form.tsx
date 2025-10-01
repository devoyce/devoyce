'use client'

import { sendEmail } from '@/app/actions'
import { Button } from '@devoyce/ui/components/button'
import { Loader2Icon } from 'lucide-react'
import { FC, Fragment, memo, useActionState, useEffect } from 'react'
import { toast } from 'sonner'

const initialState = {
  id: null,
}

const WaitlistForm: FC = () => {
  const [state, formAction, pending] = useActionState(sendEmail, initialState)

  useEffect(() => {
    if (state.id && !pending) {
      toast('You are now on the waitlist! 🎉', {
        description: 'We will notify you when we launch.',
        duration: 8000,
      })
    }
  }, [state.id, pending])

  return (
    <form action={formAction} className="mt-6 max-w-xl">
      <div className="flex gap-3 sm:grid-cols-3">
        <input
          type="email"
          name="email"
          placeholder="yourbest@email.com"
          className="focus:ring-primary bg-background h-11 flex-1 rounded-md border border-slate-300 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:col-span-1"
          required
        />
        <Button type="submit" size="lg" disabled={pending}>
          {pending ? (
            <Fragment>
              <Loader2Icon className="mr-1.5 animate-spin" />
              <span>Joining...</span>
            </Fragment>
          ) : (
            <span>Join the waitlist</span>
          )}
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
