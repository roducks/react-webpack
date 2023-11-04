type StoreActions =
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
