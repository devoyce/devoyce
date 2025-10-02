import Image from 'next/image'
import Link from 'next/link'
import { FC, memo } from 'react'

import logoIcon from '@/assets/logo.svg'

const footer: FC = () => {
  return (
    <footer className="border-t border-slate-200 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <Image src={logoIcon} alt="Devoyce" />

            <span className="text-sm font-semibold tracking-tight">
              Devoyce
            </span>
          </div>
          <div className="text-sm text-slate-600">
            © <span id="year"></span> Devoyce, Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-700">
            {/* <Link href="#" className="hover:text-slate-900">
                Privacy
              </Link>
              <Link href="#" className="hover:text-slate-900">
                Terms
              </Link> */}
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
