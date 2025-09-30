import { Button } from '@devoyce/ui/components/button'
import {
  CheckCircle,
  FileText,
  LayoutDashboard,
  Pencil,
  Zap,
} from 'lucide-react'
import { FC, memo } from 'react'
import HeroCalendar from './hero-calendar'

const HeroIllustration: FC = () => {
  return (
    <div className="relative my-12">
      <div className="rounded-md border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-slate-700">
            <LayoutDashboard className="h-4 w-4" />
            Overview
          </div>
          <div className="flex items-center gap-2">
            <Button size="xs" variant="secondary">
              Export
            </Button>
            <Button size="xs">Add Leave</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
          <HeroCalendar />

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
                <span className="font-medium text-slate-900">$500/day</span>
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
                <span className="font-semibold text-slate-900">$9,000</span>
              </div>
              <div className="flex items-center gap-2">
                <Button size="xs">
                  <CheckCircle className="mr-1.5 h-4 w-4" />
                  Approve
                </Button>
                <Button size="xs" variant="secondary">
                  <Pencil className="mr-1.5 h-4 w-4" />
                  Edit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(HeroIllustration)
