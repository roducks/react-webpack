interface ButtonProps {
  label: string
  type?: "button" | "submit" | "reset"
  color?: string
  rounded?: boolean
  large?: boolean
  className?: StringNull
  onClick: () => void
}
