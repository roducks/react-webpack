import React from "react"
import { Field } from "../Field"

export const PasswordField = ({
  name,
  value,
  error = false,
  required = false,
  onChange,
}: FieldProps) => {
  return (
    <Field
      type="password"
      name={name}
      value={value}
      error={error}
      required={required}
      onChange={onChange}
    />
  )
}
