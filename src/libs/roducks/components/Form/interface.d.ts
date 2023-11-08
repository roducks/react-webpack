type FormDataType = Record<string, string>
type FormErrorType = Record<string, boolean>

interface FormElementsType {
  current: HTMLFormElement
}

interface FormArgsProps {
  form: FormDataType
  setForm: (name: string, value: string, isInvalid?: boolean) => void
  errors: FormErrorType
  setErrors: (name: string, value: string) => void
  validate: boolean
}

interface FormProps {
  data: FormDataType
  render: ({
    form,
    setForm,
    errors,
    setErrors,
    validate,
  }: FormArgsProps) => React.ReactNode
}
