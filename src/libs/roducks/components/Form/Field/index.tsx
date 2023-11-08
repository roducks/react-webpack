import React, { useState, useEffect } from "react"
import "./styles.scss"

export const Field = ({
  type,
  name,
  value,
  label = "",
  placeholder = "",
  error = false,
  required = false,
  onChange,
}: FieldTypeProps) => {
  const [inputValue, setInputValue] = useState<StringNull>(null)

  useEffect(() => {
    setInputValue(value)
  }, [value])

  return (
    <div className={`roducks__field${error ? " roducks__field--error" : ""}`}>
      {label !== "" && <label htmlFor={name}>{label}</label>}
      {type === "textarea" ? (
        <textarea
          name={name}
          value={inputValue ?? ""}
          placeholder={placeholder}
          data-required={required ? "true" : "false"}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            const v = e.target.value
            const input = v === "" ? null : v
            setInputValue(input)
            onChange(input)
          }}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={inputValue ?? ""}
          placeholder={placeholder}
          data-required={required ? "true" : "false"}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const v = e.target.value
            const input = v === "" ? null : v
            setInputValue(input)
            onChange(input)
          }}
        />
      )}
    </div>
  )
}
