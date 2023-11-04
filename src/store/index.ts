import { State } from "./state"

export const StoreReducer = (state = State, action: StoreActions) => {
  switch (action.type) {
    case "user":
      return { ...state, user: action.payload }
    case "loader":
      return { ...state, loader: action.payload }
    case "tabIndex":
      return { ...state, tabIndex: action.payload }
    case "cards":
      return { ...state, cards: action.payload }
    default:
      return state
  }
}
