import React, { ComponentPropsWithoutRef, useState } from 'react'
import DatePicker from 'react-datepicker'

import { DataPickerHeader } from '@/shared/ui/datePicker/datePickerHeader/DatePickerHeader'
import { Typography } from '@/shared/ui/typography'
import clsx from 'clsx'

import 'react-datepicker/dist/react-datepicker.css'
import './datePicker.scss'

import s from './datePicker.module.scss'

type CustomDatePickerProps = {
  error?: string
  label?: string
} & ComponentPropsWithoutRef<typeof DatePicker>

export const CustomDatePicker = ({
  className,
  disabled,
  error,
  label,
  ...restProps
}: CustomDatePickerProps) => {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <div className={clsx(className, disabled ? s.disabled : '')}>
      {label && (
        <Typography as={'label'} className={s.label} variant={'body2'}>
          {label}
        </Typography>
      )}
      <DatePicker
        customInput={<DataPickerHeader error={error} />}
        dateFormat={'dd/MM/yyyy'}
        disabled={disabled}
        onChange={date => date && setStartDate(date)}
        popperPlacement={'top-start'}
        selected={startDate}
      />
      {error && (
        <Typography as={'span'} className={s.error} variant={'caption'}>
          {error}
        </Typography>
      )}
    </div>
  )
}
