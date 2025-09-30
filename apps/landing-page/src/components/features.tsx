import {
  CalendarRange,
  Clock8,
  CreditCard,
  KeyRound,
  MailCheck,
  Shield,
} from 'lucide-react'
import { FC, memo } from 'react'

const Features: FC = () => {
  return (
    <section
      id="features"
      className="bg-secondary-background border-y border-slate-200 py-14 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Features
          </h2>
          <p className="mt-3 text-slate-600">
            Purpose-built for employee and contractor workflows in one place.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-md border border-slate-200 bg-white p-5">
            <div className="flex items-center gap-2 text-slate-800">
              <CalendarRange className="h-5 w-5" />
              <span className="font-medium">Leave quotas</span>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Track available leave days per member and per policy.
            </p>
          </div>
          <div className="rounded-md border border-slate-200 bg-white p-5">
            <div className="flex items-center gap-2 text-slate-800">
              <Clock8 className="h-5 w-5" />
              <span className="font-medium">Working day rules</span>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Auto-compute business days across regions and holidays.
            </p>
          </div>
          <div className="rounded-md border border-slate-200 bg-white p-5">
            <div className="flex items-center gap-2 text-slate-800">
              <CreditCard className="h-5 w-5" />
              <span className="font-medium">Invoice approvals</span>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Members review drafts; org admins get notified on approval.
            </p>
          </div>
          <div className="rounded-md border border-slate-200 bg-white p-5">
            <div className="flex items-center gap-2 text-slate-800">
              <MailCheck className="h-5 w-5" />
              <span className="font-medium">Notifications</span>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Email alerts for submissions, approvals, and payments.
            </p>
          </div>
          <div className="rounded-md border border-slate-200 bg-white p-5">
            <div className="flex items-center gap-2 text-slate-800">
              <KeyRound className="h-5 w-5" />
              <span className="font-medium">Roles &amp; access</span>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Separate orgs and granular roles for admins and members.
            </p>
          </div>
          <div className="rounded-md border border-slate-200 bg-white p-5">
            <div className="flex items-center gap-2 text-slate-800">
              <Shield className="h-5 w-5" />
              <span className="font-medium">Security</span>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Best practices across data isolation and audit trails.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(Features)
