interface People {
  id: number
  name: string
  icon: string
}

export function peopleTransform(data: People[]) {
  return data.map((item) => {
    item.icon = "user"

    return item
  })
}
