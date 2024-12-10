import React, { ComponentPropsWithoutRef, forwardRef } from 'react'

import { Typography } from '@/shared/ui/typography'
import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './radioGroup.module.scss'

export type RadioGroupOptions = {
  label: string
  value: string
}
export type RadioGroupProps = {
  defaultValue?: string
  disabled?: boolean
  onChange?: (value: string) => void
  options: RadioGroupOptions[]
  orientation?: 'horizontal' | 'vertical'
} & ComponentPropsWithoutRef<typeof RadioGroup.Root>

export const FormRadioGroup = forwardRef(function FormRadioGroup(
  {
    defaultValue,
    disabled,
    onChange,
    options,
    orientation = 'horizontal',
    ...rest
  }: RadioGroupProps,
  ref
) {
  return (
    <RadioGroup.Root
      aria-label={'View density'}
      className={s.RadioGroupRoot}
      defaultValue={defaultValue}
      onValueChange={onChange}
      orientation={orientation}
      style={{ flexDirection: orientation === 'horizontal' ? 'row' : 'column' }}
      {...rest}
    >
      {options.map(option => (
        <div key={option.value} style={{ alignItems: 'center', display: 'flex' }}>
          <RadioGroup.Item
            className={`${s.RadioGroupItem} ${disabled ? s.disabled : ''}`}
            disabled={disabled}
            id={option.value}
            value={option.value}
          >
            <RadioGroup.Indicator
              className={`${s.RadioGroupIndicator} ${disabled ? s.disabled : ''}`}
            />
          </RadioGroup.Item>
          <Typography
            as={'label'}
            className={`${s.Label} ${disabled ? s.disabled : ''}`}
            htmlFor={option.value}
            variant={'caption'}
          >
            {option.label}
          </Typography>
        </div>
      ))}
    </RadioGroup.Root>
  )
})
