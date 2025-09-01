interface RadioOptionPaymentType {
  label: string
  value: string
}

interface RadioGroupBlockPropsType {
  title: string
  options: RadioOptionPaymentType[]
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
}

export type { RadioOptionPaymentType, RadioGroupBlockPropsType }
