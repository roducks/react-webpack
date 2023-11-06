interface ConfirmButtons {
  label: string
  color: string
}

interface ConfirmProps extends ModalProps {
  large?: boolean
  buttons?: ConfirmButtons[]
  alert?: StringNull
  onCancel: () => void
  onConfirm: () => void
}
