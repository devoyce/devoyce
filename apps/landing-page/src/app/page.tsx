import {
  BadgeCheck,
  Bell,
  Building2,
  Calendar,
  CalendarCheck,
  CalendarDays,
  CalendarPlus,
  CalendarRange,
  Check,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Clock8,
  CreditCard,
  Download,
  FileText,
  Gift,
  History,
  KeyRound,
  LayoutDashboard,
  Link,
  Link2,
  MailCheck,
  Pencil,
  Plus,
  Receipt,
  Send,
  Settings,
  Shield,
  Sparkles,
  Star,
  UserPlus,
  Users,
  Zap,
} from 'lucide-react'
import { Fragment } from 'react'
import PreLaunchHeader from '@/components/PreLaunchHeader'
import Header from '@/components/Header'

export default function Home() {
  return (
    <Fragment>
      <PreLaunchHeader />
      <Header />

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
                <a
                  href="#waitlist"
                  className="bg-primary focus:ring-primary inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium text-white hover:brightness-[0.95] focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  Get early access
                </a>
                <a
                  href="#product"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-slate-300 px-5 text-sm text-slate-800 hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2"
                >
                  See how it works
                </a>
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

            <div className="relative my-12">
              <div className="rounded-md border border-slate-200 bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <LayoutDashboard className="h-4 w-4" />
                    Overview
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="inline-flex h-8 items-center rounded-md border border-slate-300 px-2.5 text-xs text-slate-800 hover:bg-slate-50">
                      Export
                    </button>
                    <button className="bg-primary inline-flex h-8 items-center rounded-md px-2.5 text-xs text-white hover:brightness-[0.95]">
                      Add Leave
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
                  <div className="rounded-md border border-slate-200">
                    <div className="flex items-center justify-between border-b border-slate-200 px-3 py-2">
                      <div className="flex items-center gap-2 text-sm text-slate-800">
                        <Calendar className="h-4 w-4" />
                        April 2025
                      </div>
                      <div className="flex items-center gap-1">
                        <button className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-slate-300 hover:bg-slate-50">
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-slate-300 hover:bg-slate-50">
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="grid grid-cols-7 text-[11px] text-slate-500">
                        <div className="py-1 text-center">Mon</div>
                        <div className="py-1 text-center">Tue</div>
                        <div className="py-1 text-center">Wed</div>
                        <div className="py-1 text-center">Thu</div>
                        <div className="py-1 text-center">Fri</div>
                        <div className="py-1 text-center">Sat</div>
                        <div className="py-1 text-center">Sun</div>
                      </div>
                      <div className="mt-2 grid grid-cols-7 gap-1 text-[12px]">
                        <div className="flex h-8 items-center justify-center rounded-md border border-slate-200 text-slate-400">
                          31
                        </div>
                        <div className="flex h-8 items-center justify-center rounded-md border border-slate-200">
                          1
                        </div>
                        <div className="flex h-8 items-center justify-center rounded-md border border-slate-200">
                          2
                        </div>
                        <div className="flex h-8 items-center justify-center rounded-md border border-slate-200">
                          3
                        </div>
                        <div className="bg-secondary-background flex h-8 items-center justify-center rounded-md border border-slate-200">
                          4
                        </div>
                        <div className="flex h-8 items-center justify-center rounded-md border border-slate-200">
                          5
                        </div>
                        <div className="flex h-8 items-center justify-center rounded-md border border-slate-200">
                          6
                        </div>

                        <div className="text-primary bg-muted-primary flex h-8 items-center justify-center rounded-md border border-slate-200">
                          7
                        </div>
                        <div className="text-primary bg-muted-primary flex h-8 items-center justify-center rounded-md border border-slate-200">
                          8
                        </div>
                        <div className="text-primary bg-muted-primary flex h-8 items-center justify-center rounded-md border border-slate-200">
                          9
                        </div>
                        <div className="flex h-8 items-center justify-center rounded-md border border-slate-200">
                          10
                        </div>
                        <div className="flex h-8 items-center justify-center rounded-md border border-slate-200">
                          11
                        </div>
                        <div className="flex h-8 items-center justify-center rounded-md border border-slate-200">
                          12
                        </div>
                        <div className="flex h-8 items-center justify-center rounded-md border border-slate-200">
                          13
                        </div>

                        <div className="flex h-8 items-center justify-center rounded-md border border-slate-200">
                          14
                        </div>
                        <div className="flex h-8 items-center justify-center rounded-md border border-slate-200">
                          15
                        </div>
                        <div className="flex h-8 items-center justify-center rounded-md border border-slate-200">
                          16
                        </div>
                        <div className="flex h-8 items-center justify-center rounded-md border border-slate-200">
                          17
                        </div>
                        <div className="flex h-8 items-center justify-center rounded-md border border-slate-200">
                          18
                        </div>
                        <div className="flex h-8 items-center justify-center rounded-md border border-slate-200">
                          19
                        </div>
                        <div className="flex h-8 items-center justify-center rounded-md border border-slate-200">
                          20
                        </div>

                        <div className="flex h-8 items-center justify-center rounded-md border border-slate-200">
                          21
                        </div>
                        <div className="flex h-8 items-center justify-center rounded-md border border-slate-200">
                          22
                        </div>
                        <div className="flex h-8 items-center justify-center rounded-md border border-slate-200">
                          23
                        </div>
                        <div className="flex h-8 items-center justify-center rounded-md border border-slate-200">
                          24
                        </div>
                        <div className="flex h-8 items-center justify-center rounded-md border border-slate-200">
                          25
                        </div>
                        <div className="flex h-8 items-center justify-center rounded-md border border-slate-200">
                          26
                        </div>
                        <div className="flex h-8 items-center justify-center rounded-md border border-slate-200">
                          27
                        </div>

                        <div className="flex h-8 items-center justify-center rounded-md border border-slate-200">
                          28
                        </div>
                        <div className="flex h-8 items-center justify-center rounded-md border border-slate-200">
                          29
                        </div>
                        <div className="flex h-8 items-center justify-center rounded-md border border-slate-200">
                          30
                        </div>
                        <div className="flex h-8 items-center justify-center rounded-md border border-slate-200 text-slate-400">
                          1
                        </div>
                        <div className="flex h-8 items-center justify-center rounded-md border border-slate-200 text-slate-400">
                          2
                        </div>
                        <div className="flex h-8 items-center justify-center rounded-md border border-slate-200 text-slate-400">
                          3
                        </div>
                        <div className="flex h-8 items-center justify-center rounded-md border border-slate-200 text-slate-400">
                          4
                        </div>
                      </div>
                      <div className="mt-3 flex items-center justify-between text-xs text-slate-600">
                        <div className="inline-flex items-center gap-2">
                          <span className="bg-primary inline-block h-2 w-2 rounded-[2px]"></span>{' '}
                          Leave days
                        </div>
                        <span className="inline-flex items-center gap-1">
                          <Link className="h-3.5 w-3.5" />
                          Auto-sync to Calendar
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-md border border-slate-200">
                    <div className="flex items-center justify-between border-b border-slate-200 px-3 py-2">
                      <div className="flex items-center gap-2 text-sm text-slate-800">
                        <FileText className="h-4 w-4 stroke-1" />
                        Invoice • Apr 2025
                      </div>
                      <span className="inline-flex items-center gap-1 whitespace-nowrap text-xs text-slate-600">
                        <Zap className="h-3.5 w-3.5 stroke-1" /> Auto-generated
                      </span>
                    </div>
                    <div className="space-y-3 p-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Rate</span>
                        <span className="font-medium text-slate-900">
                          $500/day
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Working days</span>
                        <span className="font-medium text-slate-900">18</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Leave days</span>
                        <span className="font-medium text-slate-900">3</span>
                      </div>
                      <div className="flex items-center justify-between border-t border-slate-200 pt-3 text-sm">
                        <span className="text-slate-800">Total</span>
                        <span className="font-semibold text-slate-900">
                          $9,000
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="bg-primary inline-flex h-8 items-center rounded-md px-2.5 text-xs text-white hover:brightness-[0.95]">
                          <CheckCircle className="mr-1.5 h-4 w-4" />
                          Approve
                        </button>
                        <button className="inline-flex h-8 items-center rounded-md border border-slate-300 px-2.5 text-xs text-slate-800 hover:bg-slate-50">
                          <Pencil className="mr-1.5 h-4 w-4" />
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              Simple workflows for admins and members. Leave days sync to
              calendar and feed into invoices with rates per user and approval
              steps.
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
                        <div className="mt-1 text-sm font-medium">
                          Ava Patel
                        </div>
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
                      <button className="bg-primary inline-flex h-9 items-center rounded-md px-3 text-sm text-white hover:brightness-[0.95]">
                        <Plus className="mr-1.5 h-4 w-4" />
                        Add leave day
                      </button>
                      <button className="inline-flex h-9 items-center rounded-md border border-slate-300 px-3 text-sm text-slate-800 hover:bg-slate-50">
                        <History className="mr-1.5 h-4 w-4" />
                        View history
                      </button>
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
                  <button className="bg-primary inline-flex h-9 items-center rounded-md px-3 text-sm text-white hover:brightness-[0.95]">
                    <Send className="mr-1.5 h-4 w-4" /> Submit for approval
                  </button>
                  <button className="inline-flex h-9 items-center rounded-md border border-slate-300 px-3 text-sm text-slate-800 hover:bg-slate-50">
                    <Download className="mr-1.5 h-4 w-4" />
                    Download PDF
                  </button>
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
                <button className="inline-flex h-9 items-center rounded-md border border-slate-300 px-3 text-sm text-slate-800 hover:bg-slate-50">
                  <UserPlus className="mr-1.5 h-4 w-4" /> Add members
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              How it works
            </h2>
            <p className="mt-3 text-slate-600">
              Set up your organization, invite your team, and let automation
              take care of the rest.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-md border border-slate-200 bg-white p-5">
              <div className="flex items-center gap-2 text-slate-800">
                <Settings className="h-5 w-5" />
                <span className="font-medium">1. Configure</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Create an organization, set user rates, leave policies, and sync
                your Google Calendar.
              </p>
            </div>
            <div className="rounded-md border border-slate-200 bg-white p-5">
              <div className="flex items-center gap-2 text-slate-800">
                <CalendarDays className="h-5 w-5" />
                <span className="font-medium">2. Manage leave</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Admins register leave days or review requests. Events are
                auto-added to shared calendars.
              </p>
            </div>
            <div className="rounded-md border border-slate-200 bg-white p-5">
              <div className="flex items-center gap-2 text-slate-800">
                <BadgeCheck className="h-5 w-5" />
                <span className="font-medium">3. Auto-invoice</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Invoices are generated by period, rate, and days. Members
                approve, orgs are notified to pay.
              </p>
            </div>
          </div>
        </div>
      </section>

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
    </Fragment>
  )
}
