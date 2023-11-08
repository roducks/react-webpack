import React, { useState, useEffect } from "react"
import "./styles.scss"

export const Field = ({
  type,
  name,
  value,
  error = false,
  required = false,
  onChange,
}: FieldTypeProps) => {
  const [inputValue, setInputValue] = useState<FieldType>("")

  useEffect(() => {
    setInputValue(value)
  }, [value])

  return (
    <div className={`roducks__field${error ? " roducks__field--error" : ""}`}>
      <input
        type={type}
        name={name}
        value={inputValue ?? ""}
        data-required={required ? "true" : "false"}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const v = e.target.value
          setInputValue(v)
          onChange(v)
        }}
      />
    </div>
  )
}
