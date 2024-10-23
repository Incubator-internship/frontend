import { ComponentPropsWithoutRef, forwardRef } from 'react'

import Calendar from '@/shared/assets/icons/Calendar'
import clsx from 'clsx'

import s from './datePickerHeader.module.scss'

type Props = {} & ComponentPropsWithoutRef<'button'>

export const DataPickerHeader = forwardRef<HTMLButtonElement, Props>(
  ({ className, value, ...restProps }, ref) => (
    <button
      type={'button'}
      {...restProps}
      className={clsx(className, s.dataPickerHeader)}
      ref={ref}
    >
      <span>{value}</span>
      <Calendar />
    </button>
  )
)
