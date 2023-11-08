import React, { useEffect, useState, useRef } from "react"

export const Form = ({ data, onSubmit, render }: FormProps) => {
  const [submit, setSubmit] = useState<boolean>(false)
  const [validation, setValidation] = useState<boolean>(false)
  const [valid, setValid] = useState<boolean>(false)
  const [form, setForm] = useState<FormDataType>({})
  const [errors, setErrors] = useState<FormErrorType>({})
  const formRef = useRef(null)

  const updateErrors = (name: string, value: StringNull) => {
    setErrors((prevState: FormErrorType) => {
      return {
        ...prevState,
        [name]: ["", null].includes(value),
      }
    })
  }

  const updateForm = (name: string, value: StringNull, isInvalid?: boolean) => {
    setForm((prevState: FormDataType) => {
      return {
        ...prevState,
        [name]: value,
      }
    })
    const v = isInvalid === true ? "" : value
    updateErrors(name, v)
  }

  const triggerSubmit = () => {
    setSubmit(true)
  }

  useEffect(() => {
    if (submit) {
      const elements = formRef.current

      const fields = []
      if (elements !== null && elements !== undefined) {
        for (const input of [...elements]) {
          const i = input as HTMLInputElement
          if (
            ["text", "password", "textarea"].includes(i.type) &&
            i.getAttribute("data-required") === "true"
          ) {
            fields.push({
              el: i,
              name: i.name,
              value: i.value === "" ? null : i.value,
            })
          }
        }
      }

      const emptyFields = fields.filter((f) => f.value === null)

      if (emptyFields.length > 0) {
        const emptyField = emptyFields[0]

        updateErrors(emptyField.name, emptyField.value)

        setTimeout(() => {
          emptyField.el?.focus()
        }, 50)
      }

      setSubmit(false)
      setValidation(true)
    }
  }, [submit])

  useEffect(() => {
    if (validation) {
      const formValid = Object.values(errors).every((e) => !e)
      setValid(formValid)
      setValidation(false)
      onSubmit(formValid, form)
    }
  }, [validation, errors, onSubmit, form])

  useEffect(() => {
    const elements = formRef.current

    let errs = {}
    if (elements !== null && elements !== undefined) {
      for (const input of [...elements]) {
        const i = input as HTMLInputElement
        if (
          ["text", "password", "textarea"].includes(i.type) &&
          i.getAttribute("data-required") === "true"
        ) {
          errs = {
            ...errs,
            [i.name]: false,
          }
        }
      }
    }

    setForm(data)
    setErrors(errs)
  }, [data])

  return (
    <form
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      {render({
        form,
        setForm: updateForm,
        errors,
        setErrors: updateErrors,
        submit: triggerSubmit,
        valid,
      })}
    </form>
  )
}
