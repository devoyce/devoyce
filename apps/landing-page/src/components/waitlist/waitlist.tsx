import { Check, Gift } from 'lucide-react'
import { FC, memo } from 'react'
import WaitlistForm from './components/waitlist-form'

const waitlist: FC = () => {
  return (
    <section
      id="waitlist"
      className="bg-secondary-background border-t border-slate-200 py-14 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Join the waitlist
            </h3>
            <p className="mt-3 text-slate-600">
              Be first to try Devoyce and lock in early access pricing.
            </p>

            <WaitlistForm />
          </div>

          <div className="lg:col-span-1">
            <div className="rounded-md border border-slate-200 bg-white p-5">
              <div className="flex items-center gap-2 text-slate-800">
                <Gift className="h-5 w-5" />
                <span className="font-medium">Early adopter perks</span>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="text-primary h-4 w-4" />
                  30% off first year
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-primary h-4 w-4" />
                  Priority onboarding
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-primary h-4 w-4" />
                  Direct feedback channel
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(waitlist)
