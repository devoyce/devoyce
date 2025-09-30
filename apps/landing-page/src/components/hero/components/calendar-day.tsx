import { cva, VariantProps } from 'class-variance-authority'
import { FC, memo } from 'react'

const calendarDayVariants = cva(
  'flex h-8 items-center justify-center rounded-md border border-slate-200',
  {
    variants: {
      variant: {
        default: '',
        selected: 'bg-secondary-background',
        highlighted: 'text-primary bg-muted-primary',
        muted: 'text-slate-400',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

interface CalendarDayProps extends VariantProps<typeof calendarDayVariants> {
  children: string | number
}

const CalendarDay: FC<CalendarDayProps> = ({ variant, children }) => {
  return <div className={calendarDayVariants({ variant })}>{children}</div>
}

export default memo(CalendarDay)
