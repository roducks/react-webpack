import React from "react"
import "./styles.scss"

export const Button = ({
  type = "button",
  label,
  color = "default",
  rounded = false,
  large = false,
  onClick,
}: ButtonProps) => {
  const getStyle = () => {
    const style = []

    style.push("roducks__button")
    style.push(`roducks__button--${color}`)

    if (rounded) {
      style.push("roducks__button--rounded")
    }

    if (large) {
      style.push("roducks__button--large")
    }

    return style.join(" ")
  }

  return (
    <button type={type} className={getStyle()} onClick={onClick}>
      {label}
    </button>
  )
}
