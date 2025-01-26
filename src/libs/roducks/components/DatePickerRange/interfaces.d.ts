interface DatePickerRangeProps {
  from?: StringNull
  to?: StringNull
  onChange: ({ from, to }: { from: StringNull; to: StringNull }) => void
}
