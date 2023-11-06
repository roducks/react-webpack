import React from "react"
import { Modal } from "../Modal"
import { Button } from "../Button"
import { Alert } from "../Alert"

export const Confirm = ({
  title = "",
  dissmisable = true,
  large = false,
  alert = null,
  buttons = [
    {
      label: "Cancel",
      color: "outline",
    },
    {
      label: "Ok",
      color: "roducks",
    },
  ],
  display,
  onClose,
  onCancel,
  onConfirm,
  children,
}: ConfirmProps) => {
  return (
    <Modal
      title={title}
      dissmisable={dissmisable}
      display={display}
      onClose={onClose}
    >
      {alert !== null ? <Alert type={alert}>{children}</Alert> : children}
      <div
        className={`roducks__row roducks__row--aligned-right roducks__buttons`}
      >
        <Button
          label={buttons[0].label}
          color={buttons[0].color}
          large={large}
          onClick={onCancel}
        />
        <Button
          label={buttons[1].label}
          color={buttons[1].color}
          large={large}
          onClick={onConfirm}
        />
      </div>
    </Modal>
  )
}
