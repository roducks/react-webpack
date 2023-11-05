import React, { useEffect } from "react"
import { Table } from "../UI/Table"
import { usePeople } from "./hooks/usePeople"
import { COLUMNS } from "./constants"

export const Home = ({ title = "Home" }: HomeProps) => {
  const { state, getData, onSort } = usePeople()

  useEffect(() => {
    getData()
  }, [getData])

  return (
    <>
      <h2>{title}</h2>
      {state.isLoaded ? (
        <Table<People>
          columns={COLUMNS}
          data={state.people}
          sort={state.sort}
          onSort={(column: keyof People, direction: Sort) => {
            onSort({
              column,
              direction,
            })
          }}
        />
      ) : (
        "Loading ..."
      )}
    </>
  )
}
