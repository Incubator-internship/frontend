import React, { ComponentPropsWithoutRef } from 'react'

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
  <form>
    <RadioGroup.Root
      aria-label={'View density'}
      className={`${s.RadioGroupRoot} ${s.orientation}}`}
      defaultValue={defaultValue}
      orientation={orientation}
      {...rest}
    >
      {options.map(option => (
        <div key={option.value} style={{ alignItems: 'center', display: 'flex' }}>
          <RadioGroup.Item
            className={`${s.RadioGroupItem} ${disabled ? s.disabled : ''}`}
            disabled={disabled}
            id={'r1'}
            value={option.value}
          >
            <RadioGroup.Indicator
              className={`${s.RadioGroupIndicator} ${disabled ? s.disabled : ''}`}
            />
          </RadioGroup.Item>
          <label className={`${s.Label} ${disabled ? s.disabled : ''}`} htmlFor={'r1'}>
            {option.label}
          </label>
        </div>
      ))}
    </RadioGroup.Root>
  </form>
)
