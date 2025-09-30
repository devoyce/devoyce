import { Button } from '@devoyce/ui/components/button'
import {
  Building2,
  CalendarPlus,
  Check,
  Download,
  History,
  Link2,
  Plus,
  Receipt,
  Send,
  Sparkles,
  UserPlus,
} from 'lucide-react'
import { FC, memo } from 'react'

const product: FC = () => {
  return (
    <section
      id="product"
      className="bg-secondary-background border-t border-slate-200 py-14 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Everything you need to run leave and invoices
          </h2>
          <p className="mt-3 text-slate-600">
            Simple workflows for admins and members. Leave days sync to calendar
            and feed into invoices with rates per user and approval steps.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-md border border-slate-200 bg-white">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <div className="flex items-center gap-2">
                <CalendarPlus className="h-5 w-5 text-slate-800" />
                <span className="font-medium text-slate-900">
                  Leave management
                </span>
              </div>
              <span className="inline-flex items-center gap-1 text-xs text-slate-600">
                <Link2 className="h-4 w-4" /> Calendar sync
              </span>
            </div>
            <div className="px-5 py-5">
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-md border border-slate-200 p-3">
                      <div className="text-xs text-slate-600">Employee</div>
                      <div className="mt-1 text-sm font-medium">Ava Patel</div>
                      <div className="border-lighter-primary bg-muted-primary text-primary mt-2 inline-flex items-center gap-1 rounded-md border px-1.5 py-1 text-[11px]">
                        15 days left
                      </div>
                    </div>
                    <div className="rounded-md border border-slate-200 p-3">
                      <div className="text-xs text-slate-600">Dates</div>
                      <div className="mt-1 text-sm font-medium">
                        Apr 7-9, 2025
                      </div>
                      <div className="mt-2 text-[11px] text-slate-600">
                        3 business days
                      </div>
                    </div>
                    <div className="rounded-md border border-slate-200 p-3">
                      <div className="text-xs text-slate-600">Calendar</div>
                      <div className="mt-1 text-sm font-medium">Synced</div>
                      <div className="mt-2 inline-flex items-center gap-1 text-[11px] text-slate-700">
                        <Check className="h-3.5 w-3.5" /> Google Calendar
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <Button size="sm">
                      <Plus className="mr-1.5 h-4 w-4" />
                      Add leave day
                    </Button>
                    <Button size="sm" variant="secondary">
                      <History className="mr-1.5 h-4 w-4" />
                      View history
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-md border border-slate-200 bg-white">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <div className="flex items-center gap-2">
                <Receipt className="h-5 w-5 text-slate-800" />
                <span className="font-medium text-slate-900">
                  Invoice automation
                </span>
              </div>
              <span className="inline-flex items-center gap-1 text-xs text-slate-600">
                <Sparkles className="h-4 w-4" /> Drafts &amp; approvals
              </span>
            </div>
            <div className="px-5 py-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-md border border-slate-200 p-3">
                  <div className="text-xs text-slate-600">User rate</div>
                  <div className="mt-1 text-sm font-medium">$500/day</div>
                </div>
                <div className="rounded-md border border-slate-200 p-3">
                  <div className="text-xs text-slate-600">Period</div>
                  <div className="mt-1 text-sm font-medium">Apr 1-30</div>
                </div>
                <div className="rounded-md border border-slate-200 p-3">
                  <div className="text-xs text-slate-600">Auto-calc days</div>
                  <div className="mt-1 text-sm font-medium">
                    18 working, 3 leave
                  </div>
                </div>
                <div className="rounded-md border border-slate-200 p-3">
                  <div className="text-xs text-slate-600">Total</div>
                  <div className="mt-1 text-sm font-semibold">$9,000</div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <Button size="sm">
                  <Send className="mr-1.5 h-4 w-4" /> Submit for approval
                </Button>
                <Button size="sm" variant="secondary">
                  <Download className="mr-1.5 h-4 w-4" />
                  Download PDF
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-md border border-slate-200 bg-white p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2 text-slate-800">
              <Building2 className="h-5 w-5" />
              <span className="font-medium">Organizations &amp; members</span>
            </div>
            <div className="text-sm text-slate-600">
              Invite admins and members, manage roles, and keep each
              organization&apos;s data separate.
            </div>
            <div>
              <Button size="sm" variant="secondary">
                <UserPlus className="mr-1.5 h-4 w-4" /> Add members
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(product)
