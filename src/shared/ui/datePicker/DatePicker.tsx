import React, { ComponentPropsWithoutRef, ElementRef } from 'react'
import ReactDatePicker from 'react-datepicker'

import { DataPickerInput } from '@/shared/ui/datePicker/datePickerInput/DatePickerInput'
import { Typography } from '@/shared/ui/typography'
import clsx from 'clsx'

import 'react-datepicker/dist/react-datepicker.css'
import './datePicker.scss'

import s from './datePicker.module.scss'

export type DatePickerProps = {
  error?: string
  label?: string
} & ComponentPropsWithoutRef<typeof ReactDatePicker>

export const DatePicker = React.forwardRef<ElementRef<typeof ReactDatePicker>, DatePickerProps>(
  ({ className, disabled, error, label, startDate, ...restProps }, ref) => {
    return (
      <div className={clsx(className, disabled ? s.disabled : '')}>
        {label && (
          <Typography as={'label'} className={s.label} variant={'body2'}>
            {label}
          </Typography>
        )}
        <ReactDatePicker
          calendarStartDay={1}
          customInput={<DataPickerInput error={error} />}
          dateFormat={'dd/MM/yyyy'}
          disabled={disabled}
          popperPlacement={'top-start'}
          ref={ref}
          selected={startDate}
          showPopperArrow={false}
          startDate={startDate}
          {...restProps}
        />
        {error && (
          <Typography as={'span'} className={s.error} variant={'caption'}>
            {error}
          </Typography>
        )}
      </div>
    )
  }
)
