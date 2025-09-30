import Features from '@/components/features'
import Header from '@/components/header'
import Hero from '@/components/hero/hero'
import HowItWorks from '@/components/how-it-works'
import PreLaunchHeader from '@/components/pre-launch-header'
import Pricing from '@/components/pricing'
import Product from '@/components/product'
import { Check, Gift } from 'lucide-react'

export default function Home() {
  return (
    <main>
      <PreLaunchHeader />
      <Header />
      <Hero />
      <Product />
      <HowItWorks />
      <Features />
      <Pricing />

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
