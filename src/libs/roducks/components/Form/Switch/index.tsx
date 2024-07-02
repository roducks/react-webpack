import React, { useEffect, useState } from "react"
import "./styles.scss"

export const Switch = ({ value, required, error, onChange }: SwitchProps) => {
  const [toggle, setToggle] = useState<StringNullBool>(false)

  useEffect(() => {
    setToggle(value)
  }, [value])

  return (
    <div
      className={`roducks__switch roducks__switch--${
        toggle === true ? "on" : "off"
      }`}
      onClick={() => {
        setToggle((prevState) => {
          if (typeof prevState === "boolean") {
            return !prevState
          }

          return false
        })
        const t = typeof toggle === "boolean" ? !toggle : false
        onChange(t)
      }}
    >
      <div
        className={`roducks__switch--toggle roducks__switch--toggle-${
          toggle === true ? "on" : "off"
        }`}
      ></div>
    </div>
  )
}
