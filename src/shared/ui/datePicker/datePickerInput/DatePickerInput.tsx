import { ComponentPropsWithoutRef, forwardRef } from 'react'

import Calendar from '@/shared/assets/icons/Calendar'
import clsx from 'clsx'

import s from './datePickerInput.module.scss'

type Props = {
  error?: string
} & ComponentPropsWithoutRef<'button'>

export const DataPickerInput = forwardRef<HTMLButtonElement, Props>(
  ({ className, error, value, ...restProps }, ref) => {
    return (
      <button
        className={clsx(className, s.dataPickerHeader, error ? s.error : '')}
        ref={ref}
        type={'button'}
        {...restProps}
      >
        <span>{value}</span>
        <Calendar />
      </button>
    )
  }
)
