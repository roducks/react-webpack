type PeopleActions =
  | {
      type: "setData"
      payload: People[]
    }
  | {
      type: "setName"
      payload: PeopleNamePayload
    }

interface PeopleState {
  people: People[]
  isLoaded: boolean
}

interface PeopleNamePayload {
  id: number
  name: string
}
