interface LoaderState {
  loader?: boolean
}

interface UserState {
  user: User
}

interface TimeoutState {
  timeout?: boolean
}

interface UserSessionState {
  session: boolean
}

interface ReduxState
  extends LoaderState,
    UserState,
    TimeoutState,
    UserSessionState {}

type StoreActions =
  | {
      type: "loader"
      payload?: boolean
    }
  | {
      type: "user"
      payload: User
    }
  | {
      type: "timeout"
      payload?: boolean
    }
  | {
      type: "session"
      payload?: boolean
    }
