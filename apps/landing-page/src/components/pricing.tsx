import { Button } from '@devoyce/ui/components/button'
import { Check, Star } from 'lucide-react'
import Link from 'next/link'
import { FC, memo } from 'react'

const pricing: FC = () => {
  return (
    <section id="pricing" className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Simple pricing
          </h2>
          <p className="mt-3 text-slate-600">
            Transparent per-member pricing with everything you need.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col rounded-md border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-medium">Free tier</h3>
            <p className="mt-1 text-sm text-slate-600">
              For small teams getting started
            </p>
            {/* <div className="mt-4">
              <div className="flex items-end gap-1">
                <span className="text-3xl font-semibold tracking-tight">
                  $0
                </span>
                <span className="text-sm text-slate-600">/ org / mo</span>
              </div>
            </div> */}
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <Check className="text-primary h-4 w-4" />
                Up to 1 organization
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-primary h-4 w-4" />5 members
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-primary h-4 w-4" />
                Leave tracking
              </li>
            </ul>
            <Button asChild variant="secondary" className="mt-5 justify-center">
              <Link href="#waitlist">Join the waitlist</Link>
            </Button>
          </div>

          <div className="border-primary flex flex-col rounded-md border-2 bg-white p-5">
            <div className="text-primary mb-2 inline-flex items-center gap-2 text-xs">
              <Star className="h-4 w-4" /> Recommended
            </div>
            <h3 className="text-lg font-medium">Growth</h3>
            <p className="mt-1 text-sm text-slate-600">
              For growing organizations
            </p>
            {/* <div className="mt-4">
              <div className="flex items-end gap-1">
                <span className="text-3xl font-semibold tracking-tight">
                  $8
                </span>
                <span className="text-sm text-slate-600">/ member / mo</span>
              </div>
            </div> */}
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <Check className="text-primary h-4 w-4" />
                Up to 5 organizations
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-primary h-4 w-4" />
                50 members
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-primary h-4 w-4" />
                Google Calendar sync
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-primary h-4 w-4" />
                Invoice automation
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-primary h-4 w-4" />
                Approvals &amp; notifications
              </li>
            </ul>
            <Button asChild className="mt-5 justify-center">
              <Link href="#waitlist">Join the waitlist</Link>
            </Button>
          </div>

          <div className="flex flex-col rounded-md border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-medium">Enterprise</h3>
            <p className="mt-1 text-sm text-slate-600">
              Advanced needs and support
            </p>
            {/* <div className="mt-4">
              <div className="flex items-end gap-1">
                <span className="text-3xl font-semibold tracking-tight">
                  Custom
                </span>
              </div>
            </div> */}
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <Check className="text-primary h-4 w-4" />
                Unlimited organizations
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-primary h-4 w-4" />
                Unlimited members
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-primary h-4 w-4" />
                Priority support
              </li>
            </ul>
            <Button asChild variant="secondary" className="mt-5 justify-center">
              <Link href="#waitlist">Join the waitlist</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(pricing)
