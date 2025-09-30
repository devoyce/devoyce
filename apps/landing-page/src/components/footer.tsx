import Link from 'next/link'
import { FC, memo } from 'react'

const footer: FC = () => {
  return (
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
            {/* <a href="#" className="hover:text-slate-900">
                Privacy
              </a>
              <a href="#" className="hover:text-slate-900">
                Terms
              </a> */}
            <Link
              href="https://github.com/devoyce"
              target="_blank"
              className="hover:text-slate-900"
              rel="noreferrer"
            >
              GitHub
            </Link>
            <Link
              href="mailto:business@devoyce.com"
              className="hover:text-slate-900"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default memo(footer)
