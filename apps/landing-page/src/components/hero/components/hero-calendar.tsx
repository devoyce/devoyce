import { Calendar, ChevronLeft, ChevronRight, Link } from 'lucide-react'
import { FC, memo } from 'react'
import CalendarDay from './calendar-day'

const HeroCalendar: FC = () => {
  return (
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
        <div className="mt-2 grid grid-cols-7 gap-1 text-xs">
          <CalendarDay variant="muted">31</CalendarDay>
          <CalendarDay>1</CalendarDay>
          <CalendarDay>2</CalendarDay>
          <CalendarDay>3</CalendarDay>
          <CalendarDay variant="selected">4</CalendarDay>
          <CalendarDay>5</CalendarDay>
          <CalendarDay>6</CalendarDay>
          <CalendarDay variant="highlighted">7</CalendarDay>
          <CalendarDay variant="highlighted">8</CalendarDay>
          <CalendarDay variant="highlighted">9</CalendarDay>
          <CalendarDay>10</CalendarDay>
          <CalendarDay>11</CalendarDay>
          <CalendarDay>12</CalendarDay>
          <CalendarDay>13</CalendarDay>
          <CalendarDay>14</CalendarDay>
          <CalendarDay>15</CalendarDay>
          <CalendarDay>16</CalendarDay>
          <CalendarDay>17</CalendarDay>
          <CalendarDay>18</CalendarDay>
          <CalendarDay>19</CalendarDay>
          <CalendarDay>20</CalendarDay>
          <CalendarDay>21</CalendarDay>
          <CalendarDay>22</CalendarDay>
          <CalendarDay>23</CalendarDay>
          <CalendarDay>24</CalendarDay>
          <CalendarDay>25</CalendarDay>
          <CalendarDay>26</CalendarDay>
          <CalendarDay>27</CalendarDay>
          <CalendarDay>28</CalendarDay>
          <CalendarDay>29</CalendarDay>
          <CalendarDay>30</CalendarDay>
          <CalendarDay variant="muted">1</CalendarDay>
          <CalendarDay variant="muted">2</CalendarDay>
          <CalendarDay variant="muted">3</CalendarDay>
          <CalendarDay variant="muted">4</CalendarDay>
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
  )
}

export default memo(HeroCalendar)
