interface ModalProps {
  title?: string
  dissmisable?: boolean
  display: boolean
  onClose?: () => void
  children: React.ReactNode
}
