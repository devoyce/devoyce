import { FC, memo } from 'react'

const PreLaunchHeader: FC = () => {
  return (
    <div className="bg-secondary-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-center gap-3 py-2 text-sm">
          <span className="inline-flex items-center rounded-md border border-slate-200 px-2.5 py-1 text-slate-700">
            Pre-launch
          </span>
          <p className="text-slate-600">
            Join the waitlist for early access pricing.
          </p>
        </div>
      </div>
    </div>
  )
}

export default memo(PreLaunchHeader)
