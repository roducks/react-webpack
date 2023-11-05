type Sort = "ASC" | "DES" | null

interface TableColumn<T> {
  title: string
  field: keyof T
  sort: boolean
  render?: (row: T) => React.ReactNode
}

interface SortColumn<T> {
  column: keyof T
  direction: Sort
}

interface TableProps<T> {
  columns: Array<TableColumn<T>>
  data: T[]
  sort: SortColumn<T>
  onSort?: (column: keyof T, direction: Sort) => void
}
