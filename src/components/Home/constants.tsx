import React from "react"
import { Icon } from "../UI/Icon"

export const COLUMNS: Array<TableColumn<People>> = [
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
    render: () => {
      return <Icon name="trash" />
    },
  },
]
