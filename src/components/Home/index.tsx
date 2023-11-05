import React, { useEffect } from "react"
import { Table } from "../UI/Table"
import { usePeople } from "./hooks/usePeople"
import { Icon } from "../UI/Icon"
import { DeleteRow } from "./DeleteRow"

export const Home = ({ title = "Home" }: HomeProps) => {
  const { state, getData, onSort, unsetPeople } = usePeople()

  const COLUMNS: Array<TableColumn<People>> = [
    {
      title: "ID",
      field: "id",
      sort: true,
    },
    {
      title: "Name",
      field: "name",
      sort: true,
    },
    {
      title: "Icon",
      field: "icon",
      sort: false,
      render: (row) => {
        return <Icon name={row.icon} />
      },
    },
    {
      title: "",
      field: "id",
      sort: false,
      render: (row) => {
        return (
          <DeleteRow
            onDelete={() => {
              unsetPeople(row)
            }}
          />
        )
      },
    },
  ]

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
