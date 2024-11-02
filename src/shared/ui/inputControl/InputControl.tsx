import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Input, TextFieldProps } from '@/shared/ui/input'

type Props<T extends FieldValues> = Omit<
  TextFieldProps,
  'disabled' | 'error' | 'name' | 'onBlur' | 'onChange' | 'ref' | 'value'
> &
  UseControllerProps<T>

export const InputControl = <T extends FieldValues>({
  control,
  defaultValue,
  disabled,
  name,
  rules,
  shouldUnregister,
  ...restProps
}: Props<T>) => {
  const {
    field: inputField,
    fieldState: { error },
  } = useController({
    control,
    defaultValue,
    disabled,
    name,
    rules,
    shouldUnregister,
  })

  return <Input {...restProps} error={error?.message} {...inputField} />
}
