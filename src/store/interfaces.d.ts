type StoreActions =
  | {
      type: "user"
      payload: User
    }
  | {
      type: "loader"
      payload: boolean
    }
