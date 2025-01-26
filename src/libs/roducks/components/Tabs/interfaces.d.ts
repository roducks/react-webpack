interface Tabs extends RoducksComponentChildren {
  children: React.ReactNode
}
interface Tab extends RoducksComponentChildren {
  id: string
  title: React.ReactNode
  visible?: boolean
}
