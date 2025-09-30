import { Button } from '@devoyce/ui/components/button'
import { Bell, CalendarCheck, FileText, Users } from 'lucide-react'
import { FC, memo } from 'react'
import HeroIllustration from './components/hero-illustration'

const Hero: FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-14 md:pb-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="inline-flex items-center rounded-md border border-slate-200 px-2 py-1 text-xs text-slate-700">
                For orgs &amp; teams
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-slate-600">
                <CalendarCheck className="h-4 w-4" />
                Google Calendar sync
              </span>
            </div>
            <h1 className="text-3xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
              Automate leave and invoices for employees and contractors
            </h1>
            <p className="mt-4 text-base text-slate-600 md:text-lg">
              Centralize leave requests, auto-generate invoices by rate and
              working days, and notify organizations upon approval. Simple,
              reliable, and built for multi-org SaaS.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="#waitlist">Get early access</a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="#product">See how it works</a>
              </Button>
            </div>

            <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Organizations &amp; Members
              </div>
              <div className="hidden items-center gap-2 sm:flex">
                <FileText className="h-4 w-4" />
                Auto invoices
              </div>
              <div className="hidden items-center gap-2 sm:flex">
                <Bell className="h-4 w-4" />
                Approval notifications
              </div>
            </div>
          </div>

          <HeroIllustration />
        </div>
      </div>
    </section>
  )
}

export default memo(Hero)
