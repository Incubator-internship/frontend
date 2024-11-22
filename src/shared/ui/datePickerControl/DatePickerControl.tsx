import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { DatePicker, DatePickerProps } from '@/shared/ui/datePicker'

type Props<T extends FieldValues> = Omit<
  DatePickerProps,
  'disabled' | 'name' | 'onBlur' | 'onChange' | 'ref' | 'selected' | 'value'
> &
  UseControllerProps<T>

export const DatePickerControl = <T extends FieldValues>({
  control,
  defaultValue,
  disabled,
  name,
  rules,
  shouldUnregister,
  ...restProps
}: Props<T>) => {
  const {
    field: { value, ...restField },
    fieldState: { error },
  } = useController({
    control,
    defaultValue,
    disabled,
    name,
    rules,
    shouldUnregister,
  })

  return (
    <DatePicker
      {...(restProps as DatePickerProps)}
      error={error?.message}
      selected={value}
      {...restField}
    />
  )
}
