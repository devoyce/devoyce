import Features from '@/components/features'
import Header from '@/components/header'
import Hero from '@/components/hero/hero'
import HowItWorks from '@/components/how-it-works'
import PreLaunchHeader from '@/components/pre-launch-header'
import Product from '@/components/product'
import { Check, Gift, Star } from 'lucide-react'

export default function Home() {
  return (
    <main>
      <PreLaunchHeader />
      <Header />
      <Hero />
      <Product />
      <HowItWorks />
      <Features />

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
              <h3 className="text-lg font-medium">Starter</h3>
              <p className="mt-1 text-sm text-slate-600">
                For small teams getting started
              </p>
              <div className="mt-4">
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-semibold tracking-tight">
                    $0
                  </span>
                  <span className="text-sm text-slate-600">/ org / mo</span>
                </div>
              </div>
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
              <a
                href="#waitlist"
                className="mt-5 inline-flex h-10 items-center justify-center rounded-md border border-slate-300 px-3 text-sm text-slate-800 hover:bg-slate-50"
              >
                Get started
              </a>
            </div>

            <div className="border-primary flex flex-col rounded-md border-2 bg-white p-5">
              <div className="text-primary mb-2 inline-flex items-center gap-2 text-xs">
                <Star className="h-4 w-4" /> Recommended
              </div>
              <h3 className="text-lg font-medium">Growth</h3>
              <p className="mt-1 text-sm text-slate-600">
                For growing organizations
              </p>
              <div className="mt-4">
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-semibold tracking-tight">
                    $8
                  </span>
                  <span className="text-sm text-slate-600">/ member / mo</span>
                </div>
              </div>
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
              <a
                href="#waitlist"
                className="bg-primary mt-5 inline-flex h-10 items-center justify-center rounded-md px-3 text-sm text-white hover:brightness-[0.95]"
              >
                Start trial
              </a>
            </div>

            <div className="flex flex-col rounded-md border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-medium">Enterprise</h3>
              <p className="mt-1 text-sm text-slate-600">
                Advanced needs and support
              </p>
              <div className="mt-4">
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-semibold tracking-tight">
                    Custom
                  </span>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="text-primary h-4 w-4" />
                  SSO and audit logs
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-primary h-4 w-4" />
                  Data residency options
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-primary h-4 w-4" />
                  Priority support
                </li>
              </ul>
              <a
                href="#waitlist"
                className="mt-5 inline-flex h-10 items-center justify-center rounded-md border border-slate-300 px-3 text-sm text-slate-800 hover:bg-slate-50"
              >
                Contact sales
              </a>
            </div>
          </div>
        </div>
      </section>

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
                Be first to try Actify and lock in early access pricing.
              </p>

              <form className="mt-6 max-w-xl">
                <div className="flex gap-3 sm:grid-cols-3">
                  <input
                    type="email"
                    placeholder="yourbest@email.com"
                    className="focus:ring-primary bg-background h-11 flex-1 rounded-md border border-slate-300 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:col-span-1"
                  />
                  <button
                    type="submit"
                    className="bg-primary focus:ring-primary col-span-1 h-11 rounded-md px-4 text-sm text-white hover:brightness-[0.95] focus:outline-none focus:ring-2 focus:ring-offset-2"
                  >
                    Request access
                  </button>
                </div>
                <p className="mt-3 text-xs text-slate-600">
                  By signing up, you agree to receive product updates.
                  Unsubscribe anytime.
                </p>
              </form>
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

      <footer className="border-t border-slate-200 py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-300 text-sm font-semibold tracking-tight text-slate-900">
                y
              </div>
              <span className="text-sm font-semibold tracking-tight">
                Devoyce
              </span>
            </div>
            <div className="text-sm text-slate-600">
              © <span id="year"></span> Devoyce, Inc. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-700">
              <a href="#" className="hover:text-slate-900">
                Privacy
              </a>
              <a href="#" className="hover:text-slate-900">
                Terms
              </a>
              <a href="#" className="hover:text-slate-900">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
