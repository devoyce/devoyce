import { Button } from '@devoyce/ui/components/button'
import { FC, memo } from 'react'

const Header: FC = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="./" className="flex items-center gap-2">
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
            <Button size="sm" variant="secondary" asChild>
              <a href="#">Sign in</a>
            </Button>
            <Button size="sm" asChild>
              <a href="#waitlist">Join waitlist</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default memo(Header)
