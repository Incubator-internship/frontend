import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

import { DataPickerHeader } from '@/shared/ui/datePicker/datePickerHeader/DatePickerHeader'

import 'react-datepicker/dist/react-datepicker.css'
import './datePicker.scss'

export const CustomDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <DatePicker
      customInput={<DataPickerHeader />}
      dateFormat={'dd/MM/yyyy'}
      onChange={date => date && setStartDate(date)}
      popperPlacement={'top-start'}
      selected={startDate}
    />
  )
}
