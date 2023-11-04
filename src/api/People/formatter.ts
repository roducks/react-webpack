export const formatter = (data: People[]) => {
  return data.map((item) => {
    item.icon = "user"

    return item
  })
}
