type FieldType = string | number | null

interface FieldBaseProps {
  name: string
  value: StringNull
  label?: string
  placeholder?: string
  required?: boolean
  error?: boolean
}

interface FieldProps extends FieldBaseProps {
  onChange: (value: StringNull) => void
}

interface FieldTypeProps extends FieldProps {
  type: string
}
