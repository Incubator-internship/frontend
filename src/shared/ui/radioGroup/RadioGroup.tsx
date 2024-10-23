import React, { ComponentPropsWithoutRef, ElementType } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './radioGroup.module.scss'

type RadioGroupOptions = {
  label: string
  value: string
}
type Props = {
  defaultValue?: string
  options: RadioGroupOptions[]
} & ComponentPropsWithoutRef<typeof RadioGroup.Root>

export const FormRadioGroup = ({ defaultValue, options, ...rest }: Props) => (
  <form>
    <RadioGroup.Root
      aria-label={'View density'}
      className={s.RadioGroupRoot}
      defaultValue={defaultValue}
      {...rest}
    >
      {options.map(option => (
        <div key={option.value} style={{ alignItems: 'center', display: 'flex' }}>
          <RadioGroup.Item className={s.RadioGroupItem} id={'r1'} value={option.value}>
            <RadioGroup.Indicator className={s.RadioGroupIndicator} />
          </RadioGroup.Item>
          <label className={s.Label} htmlFor={'r1'}>
            {option.label}
          </label>
        </div>
      ))}
    </RadioGroup.Root>
  </form>
)
