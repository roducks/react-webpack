export const formatters = {
  getPeople: (data: People[]) => {
    return data.map((item) => {
      return {
        ...item,
        icon: "flag",
      }
    })
  },
}
