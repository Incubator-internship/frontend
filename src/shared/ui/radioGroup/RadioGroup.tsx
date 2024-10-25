import React, { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/shared/ui/typography'
import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './radioGroup.module.scss'

type RadioGroupOptions = {
  label: string
  value: string
}
type Props = {
  defaultValue?: string
  disabled?: boolean
  options: RadioGroupOptions[]
  orientation?: 'horizontal' | 'vertical'
} & ComponentPropsWithoutRef<typeof RadioGroup.Root>

export const FormRadioGroup = ({
  defaultValue,
  disabled,
  options,
  orientation = 'horizontal',
  ...rest
}: Props) => (
  <RadioGroup.Root
    aria-label={'View density'}
    className={s.RadioGroupRoot}
    defaultValue={defaultValue}
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
