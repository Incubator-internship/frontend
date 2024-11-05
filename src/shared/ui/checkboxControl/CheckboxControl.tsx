import React from 'react'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '../checkbox/Checkbox'

export type CheckboxControlProps<TFieldValues extends FieldValues> = Omit<
  CheckboxProps,
  'checked' | 'id' | 'onChange' | 'ref'
> &
  UseControllerProps<TFieldValues>

export const CheckboxControl = <TFieldValues extends FieldValues>({
  control,
  defaultValue,
  disabled,
  name,
  rules,
  shouldUnregister,
  ...checkboxProps
}: CheckboxControlProps<TFieldValues>) => {
  const {
    field: { onChange, ref, value },
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
    <Checkbox
      {...checkboxProps}
      checked={value}
      error={error?.message}
      id={name}
      onCheckedChange={onChange}
      ref={ref}
    />
  )
}

export default CheckboxControl
