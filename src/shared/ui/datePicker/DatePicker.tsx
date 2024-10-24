import React, { ComponentPropsWithoutRef } from 'react'
import ReactDatePicker from 'react-datepicker'

import { DataPickerInput } from '@/shared/ui/datePicker/datePickerInput/DatePickerInput'
import { Typography } from '@/shared/ui/typography'
import clsx from 'clsx'

import 'react-datepicker/dist/react-datepicker.css'
import './datePicker.scss'

import s from './datePicker.module.scss'

type DatePickerProps = {
  endDate?: Date | null
  error?: string
  label?: string
  setEndDate?: (date: Date | null) => void
  setStartDate: (date: Date | null) => void
  startDate: Date | null
} & ComponentPropsWithoutRef<typeof ReactDatePicker>

export const DatePicker = ({
  className,
  disabled,
  endDate,
  error,
  label,
  setEndDate,
  setStartDate,
  startDate,
  ...restProps
}: DatePickerProps) => {
  const isRange = !!endDate

  const handleChange = (
    date: [Date | null, Date | null] | Date | null,
    e?: React.KeyboardEvent<HTMLElement> | React.MouseEvent<HTMLElement, MouseEvent> | undefined
  ) => {
    if (Array.isArray(date)) {
      const [start, end] = date

      setStartDate(start)
      setEndDate?.(end)
    } else {
      setStartDate(date)
    }
  }

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
        endDate={endDate}
        onChange={handleChange}
        popperPlacement={'top-start'}
        selected={startDate}
        selectsRange={isRange}
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
