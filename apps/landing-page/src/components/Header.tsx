import { FC, memo } from 'react'

const Header: FC = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-300 text-sm font-semibold tracking-tight text-slate-900">
              y
            </div>
            <span className="text-sm font-semibold tracking-tight md:text-base">
              Devoyce
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-slate-700 md:flex">
            <a href="#product" className="hover:text-slate-900">
              Product
            </a>
            <a href="#how" className="hover:text-slate-900">
              How it works
            </a>
            <a href="#features" className="hover:text-slate-900">
              Features
            </a>
            <a href="#pricing" className="hover:text-slate-900">
              Pricing
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="inline-flex h-9 items-center rounded-md border border-slate-300 px-3 text-sm text-slate-800 hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2"
            >
              Sign in
            </a>
            <a
              href="#waitlist"
              className="bg-primary focus:ring-primary inline-flex h-9 items-center rounded-md px-3 text-sm text-white hover:brightness-[0.95] focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Join waitlist
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default memo(Header)
