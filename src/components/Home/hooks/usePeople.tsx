import { useReducer, useCallback } from "react"
import { peopleReducer } from "./reducer"
import { PEOPLE_STATE } from "./data"
import { People } from "src/api/People"

export const usePeople = () => {
  const [state, dispatch] = useReducer(peopleReducer, PEOPLE_STATE)

  const setData = useCallback((payload: People[]) => {
    dispatch({ type: "setData", payload })
  }, [])

  const setName = useCallback((payload: PeopleNamePayload) => {
    dispatch({ type: "setName", payload })
  }, [])

  const getData = useCallback(() => {
    People.get()
      .then((response) => {
        setData(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [setData])

  return {
    state,
    setData,
    setName,
    getData,
  }
}
