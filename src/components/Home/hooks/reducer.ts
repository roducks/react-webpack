export const peopleReducer = (state: PeopleState, action: PeopleActions) => {
  switch (action.type) {
    case "setData": {
      return {
        ...state,
        isLoaded: true,
        people: action.payload,
      }
    }
    case "setSort": {
      return {
        ...state,
        sort: action.payload,
      }
    }
    case "setName": {
      const people = state.people.map((person) => {
        if (person.id === action.payload.id) {
          return {
            ...person,
            name: action.payload.name,
          }
        }

        return person
      })
      return {
        ...state,
        people,
      }
    }
    case "unsetPeople": {
      const people = state.people.filter(
        (person) => person.id !== action.payload.id
      )
      return {
        ...state,
        people,
      }
    }
    default: {
      return state
    }
  }
}
