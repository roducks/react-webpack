import { useReducer, useCallback } from "react"
import { peopleReducer } from "./reducer"
import { PEOPLE_STATE } from "./data"
import { People } from "src/api/People"
import { sort } from "src/utils/functions"

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
      const sorted = sort<People>(state.people, payload)
      setData(sorted)
      setSort({
        column: payload.column,
        direction: payload.direction,
      })
    },
    [setData, setSort, state.people]
  )

  const unsetPeople = useCallback((payload: People) => {
    dispatch({ type: "unsetPeople", payload })
  }, [])

  const getData = useCallback(() => {
    People.get()
      .then((response) => {
        setData(response)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [setData])

  return {
    state,
    setData,
    setName,
    setSort,
    getData,
    onSort,
    unsetPeople,
  }
}
