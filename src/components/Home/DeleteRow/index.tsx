import React, { useState } from "react"
import { Icon } from "../../../libs/roducks/components/Icon"
import { Confirm } from "../../../libs/roducks/components/Confirm"

export const DeleteRow = ({ onDelete }: DeleteRowProps) => {
  const [displayModal, setDisplayModal] = useState<boolean>(false)

  const closeConfirm = () => {
    setDisplayModal((prevState) => !prevState)
  }

  return (
    <>
      <a
        href="#void"
        className="roducks__theme--color-red"
        onClick={(e) => {
          e.preventDefault()
          setDisplayModal(true)
        }}
      >
        <Icon name="trash" />
      </a>
      <Confirm
        title="Delete record"
        display={displayModal}
        dissmisable={true}
        large={true}
        alert="warning"
        buttons={[
          {
            label: "Cancel",
            color: "outline",
          },
          {
            label: "Delete",
            color: "red",
          },
        ]}
        onClose={closeConfirm}
        onCancel={closeConfirm}
        onConfirm={() => {
          closeConfirm()
          onDelete()
        }}
      >
        <p>This action cannot be undone.</p>
      </Confirm>
    </>
  )
}
