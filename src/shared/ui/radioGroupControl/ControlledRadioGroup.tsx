import { Controller, FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { FormRadioGroup, RadioGroupProps } from '@/shared/ui/radioGroup/RadioGroup'

type Props<TFieldValues extends FieldValues> = Omit<
  RadioGroupProps,
  'disabled' | 'name' | 'onBlur' | 'onChange' | 'ref'
> &
  UseControllerProps<TFieldValues>

export const ControlledRadioGroup = <TFieldValues extends FieldValues>({
  control,
  defaultValue,
  disabled,
  name,
  options,
  rules,
  shouldUnregister,
  ...RadioGroupProps
}: Props<TFieldValues>) => {
  const {
    field,
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
    <FormRadioGroup {...field} {...RadioGroupProps} defaultValue={defaultValue} options={options} />
  )
}
