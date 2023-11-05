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

  const setSort = useCallback((payload: SortColumn<People>) => {
    dispatch({ type: "setSort", payload })
  }, [])

  const onSort = useCallback(
    (payload: SortColumn<People>) => {
      const clone = [...state.people]
      if (payload.direction === "ASC") {
        clone.sort((a, b) => (a[payload.column] > b[payload.column] ? 1 : -1))
      } else if (payload.direction === "DES") {
        clone.sort((a, b) => (a[payload.column] > b[payload.column] ? -1 : 1))
      }
      setData(clone)
      setSort({
        column: payload.column,
        direction: payload.direction,
      })
    },
    [setData, setSort, state.people]
  )

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
    setSort,
    getData,
    onSort,
  }
}
