import React from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './radioGroup.module.scss'

export const FormRadioGroup = () => (
  <form>
    <RadioGroup.Root
      aria-label={'View density'}
      className={s.RadioGroupRoot}
      defaultValue={'default'}
    >
      <div style={{ alignItems: 'center', display: 'flex' }}>
        <RadioGroup.Item className={s.RadioGroupItem} id={'r1'} value={'default'}>
          <RadioGroup.Indicator className={s.RadioGroupIndicator} />
        </RadioGroup.Item>
        <label className={s.Label} htmlFor={'r1'}>
          Default
        </label>
      </div>
      <div style={{ alignItems: 'center', display: 'flex' }}>
        <RadioGroup.Item className={s.RadioGroupItem} id={'r2'} value={'comfortable'}>
          <RadioGroup.Indicator className={s.RadioGroupIndicator} />
        </RadioGroup.Item>
        <label className={s.Label} htmlFor={'r2'}>
          Comfortable
        </label>
      </div>
    </RadioGroup.Root>
  </form>
)
