import React, { useState } from "react"
import { TextField } from "../TextField"

export const EmailField = ({
  name,
  value,
  error = false,
  required = false,
  onChange,
}: EmailFieldProps) => {
  const [invalid, setInvalid] = useState(false)
  const re = /^[a-z0-9_-]+@[a-z0-9_-]+\.[a-z]{2,3}(\.[a-z]{2,3})?$/i

  return (
    <TextField
      name={name}
      value={value}
      error={error || invalid}
      required={required}
      onChange={(value: string) => {
        const isInvalid = !re.test(value)
        setInvalid(isInvalid)
        onChange(value, isInvalid)
      }}
    />
  )
}
