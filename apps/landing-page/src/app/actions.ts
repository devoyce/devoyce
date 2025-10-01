'use server'

import WaitlistEmailTemplate from '@/components/waitlist/components/email-template'
import { Resend } from 'resend'
import z from 'zod'

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function sendEmail(
  initialState: { id: string | null },
  formData: FormData
) {
  const resend = new Resend(process.env.RESEND_API_KEY)

  const email = z.string().email().parse(formData.get('email'))

  if (!email) return { id: null }

  const validatedEmail = z.string().email().parse(email)

  if (!validatedEmail) return { id: null }

  // const { data } = await resend.emails.send({
  //   from: 'Devoyce <business@devoyce.com>',
  //   to: validatedEmail,
  //   subject: 'You are now on the waitlist! 🎉',
  //   react: WaitlistEmailTemplate(),
  // })

  await sleep(2000)

  const data = { id: 'mock-id-123' } // Mocked response for demonstration

  if (data?.id) {
    return { id: data.id }
  }

  return { id: null }
}
