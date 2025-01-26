interface SessionTimeout {
  display: boolean
  onTimeout: () => void
  seconds?: number
}
