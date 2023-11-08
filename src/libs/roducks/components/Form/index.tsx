import React, { useEffect, useState, useRef } from "react"

export const Form = ({ data, render }: FormProps) => {
  const [form, setForm] = useState<FormDataType>({})
  const [errors, setErrors] = useState<FormErrorType>({})
  const formRef = useRef(null)

  const updateErrors = (name: string, value: string) => {
    setErrors((prevState: FormErrorType) => {
      return {
        ...prevState,
        [name]: value === "",
      }
    })
  }

  const updateForm = (name: string, value: string, isInvalid?: boolean) => {
    setForm((prevState: FormDataType) => {
      return {
        ...prevState,
        [name]: value,
      }
    })
    const v = isInvalid === true ? "" : value
    updateErrors(name, v)
  }

  const validate = () => {
    return Object.values(errors).every((e) => !e)
  }

  useEffect(() => {
    const elements = formRef.current

    let errs = {}
    if (elements !== null && elements !== undefined) {
      for (const input of [...elements]) {
        const i = input as HTMLInputElement
        if (
          ["text"].includes(i.type) &&
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
        validate: validate(),
      })}
    </form>
  )
}
