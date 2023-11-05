import React from "react"
import { Icon } from "../../../components/UI/Icon"

interface DeleteRowProps {
  onDelete: () => void
}

export const DeleteRow = ({ onDelete }: DeleteRowProps) => {
  return (
    <a
      href="#void"
      onClick={() => {
        onDelete()
      }}
    >
      <Icon name="trash" />
    </a>
  )
}
