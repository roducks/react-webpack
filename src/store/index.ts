import { State } from "./state"
import { legacy_createStore as createStore } from "redux"

const StoreReducer = (state = State, action: StoreActions) => {
  switch (action.type) {
    case "loader": {
      const loader = state.loader ?? false
      return { ...state, loader: action.payload ?? !loader }
    }
    case "user":
      return { ...state, user: action.payload }
    case "session": {
      const session = state.session ?? false
      return { ...state, session: action.payload ?? !session }
    }
    case "timeout": {
      const timeout = state.timeout ?? false
      return { ...state, timeout: action.payload ?? !timeout }
    }
    default:
      return state
  }
}

export const store = createStore(StoreReducer)
