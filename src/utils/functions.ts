export const onDev = () => {
  return process.env["NODE_ENV"] === "development"
}

export const apiLocal = () => {
  return process.env["API_LOCAL"] === "on"
}

export function sort<T>(data: T[], sort: SortColumn<T>) {
  if (sort.direction?.toUpperCase() === "ASC") {
    data.sort((a, b) => (a[sort.column] > b[sort.column] ? 1 : -1))
  } else if (sort.direction?.toUpperCase() === "DES") {
    data.sort((a, b) => (a[sort.column] > b[sort.column] ? -1 : 1))
  }

  return data
}
