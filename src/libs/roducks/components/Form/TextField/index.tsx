import React from "react"
import { Field } from "../Field"

export const TextField = ({
  name,
  value,
  error = false,
  required = false,
  onChange,
}: FieldProps) => {
  return (
    <Field
      type="text"
      name={name}
      value={value}
      error={error}
      required={required}
      onChange={onChange}
    />
  )
}
