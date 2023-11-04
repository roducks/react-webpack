export const peopleReducer = (state: PeopleState, action: PeopleActions) => {
  switch (action.type) {
    case "setData": {
      return {
        ...state,
        isLoaded: true,
        people: action.payload,
      }
    }
    case "setName": {
      const people = state.people.map((person) => {
        if (person.id === action.payload.id) {
          person.name = action.payload.name
        }

        return person
      })
      return {
        ...state,
        people,
      }
    }
    default: {
      return { ...state }
    }
  }
}
