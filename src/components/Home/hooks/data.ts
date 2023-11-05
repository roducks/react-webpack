import { PEOPLE } from "src/models/People/data"

export const PEOPLE_STATE: PeopleState = {
  people: PEOPLE,
  sort: {
    column: "name",
    direction: "ASC",
  },
  isLoaded: false,
}
