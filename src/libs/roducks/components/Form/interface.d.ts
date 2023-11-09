type FormDataType = Record<string, StringNull>
type FormErrorType = Record<string, boolean>

interface FormElementsType {
  current: HTMLFormElement
}

interface FormArgsProps {
  form: FormDataType
  setForm: (name: string, value: StringNull, isInvalid?: boolean) => void
  errors: FormErrorType
  setErrors: (name: string, value: string) => void
  submit: CallableFunction
  valid: boolean
}

interface FormProps {
  data: FormDataType
  alert: {
    success: string
    error: string
  }
  onSubmit: (
    valid: boolean,
    form: FormDataType,
    onSuccess: CallableFunction
  ) => void
  render: ({
    form,
    setForm,
    errors,
    setErrors,
    submit,
  }: FormArgsProps) => React.ReactNode
}
