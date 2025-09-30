import { Button } from '@devoyce/ui/components/button'
import Link from 'next/link'
import { FC, memo } from 'react'

const Header: FC = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="./" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-300 text-sm font-semibold tracking-tight text-slate-900">
              y
            </div>
            <span className="text-sm font-semibold tracking-tight md:text-base">
              Devoyce
            </span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-slate-700 md:flex">
            <Link href="#product" className="hover:text-slate-900">
              Product
            </Link>
            <Link href="#how" className="hover:text-slate-900">
              How it works
            </Link>
            <Link href="#features" className="hover:text-slate-900">
              Features
            </Link>
            <Link href="#pricing" className="hover:text-slate-900">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            {/* <Button size="sm" variant="secondary" asChild>
              <Link href="#">Sign in</Link>
            </Button> */}
            <Button size="sm" asChild>
              <Link href="#waitlist">Join waitlist</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default memo(Header)
