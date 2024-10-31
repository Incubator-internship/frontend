import { Controller, FieldValues, UseControllerProps } from 'react-hook-form'

import { FormRadioGroup, RadioGroupProps } from '@/shared/ui/radioGroup/RadioGroup'

type Props<TFieldValues extends FieldValues> = RadioGroupProps & UseControllerProps<TFieldValues>

export const ControlledRadioGroup = <TFieldValues extends FieldValues>({
  control,
  defaultValue,
  name,
  options,
  rules,
  shouldUnregister,
  ...RadioGroupProps
}: Props<TFieldValues>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormRadioGroup defaultValue={'female'} options={options} {...field} {...RadioGroupProps} />
      )}
    />
  )
}
