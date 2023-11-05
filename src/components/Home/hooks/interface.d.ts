type PeopleActions =
  | {
      type: "setData"
      payload: People[]
    }
  | {
      type: "setSort"
      payload: SortColumn<People>
    }
  | {
      type: "setName"
      payload: PeopleNamePayload
    }
  | {
      type: "unsetPeople"
      payload: People
    }

interface PeopleState {
  people: People[]
  isLoaded: boolean
  sort: {
    column: keyof People
    direction: Sort
  }
}

interface PeopleNamePayload {
  id: number
  name: string
}
