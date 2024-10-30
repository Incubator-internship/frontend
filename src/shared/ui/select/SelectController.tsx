import * as React from 'react'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Select, SelectProps } from './Select'

type SelectControllerProps<T extends FieldValues> = Omit<SelectProps, 'onChange' | 'value'> &
  UseControllerProps<T>

export const SelectController = <T extends FieldValues>({
  control,
  name,
  ...rest
}: SelectControllerProps<T>) => {
  const {
    field: { onChange, value, ...restField },
  } = useController({
    control,
    name,
  })

  return <Select {...restField} onChange={onChange} value={value} {...rest} />
}
