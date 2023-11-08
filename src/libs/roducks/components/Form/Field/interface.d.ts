type FieldType = string | number | null

interface FieldBaseProps {
  name: string
  value: string
  required?: boolean
  error?: boolean
}

interface FieldProps extends FieldBaseProps {
  onChange: (value: string) => void
}

interface EmailFieldProps extends FieldBaseProps {
  onChange: (value: string, isInvalid: boolean) => void
}

interface FieldTypeProps extends FieldProps {
  type: string
}
