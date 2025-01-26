interface CalendarProps {
  range?: boolean
  date?: StringNull
  year?: number
  month?: number
  startDate?: StringNull
  controls?: boolean
  setDate?: (value: string) => void
  onPrev?: () => void
  onNext?: () => void
}
