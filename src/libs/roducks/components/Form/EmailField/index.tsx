import React, { useState } from "react"
import { TextField } from "../TextField"

export const EmailField = ({
  error = false,
  onChange,
  ...props
}: EmailFieldProps) => {
  const [invalid, setInvalid] = useState(false)
  const re = /^[a-z0-9_-]+@[a-z0-9_-]+\.[a-z]{2,3}(\.[a-z]{2,3})?$/i

  return (
    <TextField
      error={error || invalid}
      onChange={(value: StringNull) => {
        const isInvalid = value !== null ? !re.test(value) : true
        setInvalid(isInvalid)
        onChange(value, isInvalid)
      }}
      {...props}
    />
  )
}
