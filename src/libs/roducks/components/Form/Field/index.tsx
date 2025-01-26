import React, { useState, useEffect } from "react"
import InputMask from "react-input-mask"
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
  const [inputValue, setInputValue] = useState<StringNullBool>(null)

  const updateValue = (v: string) => {
    const input = v === "" ? null : v
    setInputValue(input)
    onChange(input)
  }

  useEffect(() => {
    setInputValue(value)
  }, [value])

  return (
    <div className={`roducks__field${error ? " roducks__field--error" : ""}`}>
      {label !== "" && <label htmlFor={name}>{label}</label>}
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={typeof inputValue === "string" ? inputValue : ""}
          placeholder={placeholder}
          data-required={required ? "true" : "false"}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            updateValue(e.target.value)
          }}
          onBlur={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            updateValue(e.target.value)
          }}
        />
      ) : (
        <>
          {type === "date" ? (
            <InputMask
              id={name}
              name={name}
              mask="99/99/9999"
              maskChar="_"
              alwaysShowMask
              value={typeof inputValue === "string" ? inputValue : ""}
              placeholder={placeholder}
              data-required={required ? "true" : "false"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                updateValue(e.target.value)
              }}
              onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
                updateValue(e.target.value)
              }}
            />
          ) : (
            <input
              id={name}
              type={type}
              name={name}
              value={typeof inputValue === "string" ? inputValue : ""}
              placeholder={placeholder}
              data-required={required ? "true" : "false"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                updateValue(e.target.value)
              }}
              onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
                updateValue(e.target.value)
              }}
            />
          )}
        </>
      )}
    </div>
  )
}
