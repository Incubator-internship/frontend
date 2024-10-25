import React, { ComponentPropsWithoutRef } from 'react'
import ReactDatePicker from 'react-datepicker'

import { DataPickerInput } from '@/shared/ui/datePicker/datePickerInput/DatePickerInput'
import { Typography } from '@/shared/ui/typography'
import clsx from 'clsx'

import 'react-datepicker/dist/react-datepicker.css'
import './datePicker.scss'

import s from './datePicker.module.scss'

type DatePickerProps = {
  error?: string
  label?: string
} & ComponentPropsWithoutRef<typeof ReactDatePicker>

export const DatePicker = ({
  className,
  disabled,
  error,
  label,
  startDate,
  ...restProps
}: DatePickerProps) => {
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
