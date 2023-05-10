import initialValues from "./initialValues"

type ReducerAction =
  | {
      type: "user"
      payload: User
    }
  | {
      type: "loader"
      payload: boolean
    }
  | {
      type: "tabIndex"
      payload: number
    }
  | {
      type: "cards"
      payload: Cards
    }

const Reducer = (state = initialValues, action: ReducerAction) => {
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

export default Reducer
