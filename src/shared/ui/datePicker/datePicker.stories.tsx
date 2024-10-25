import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { DatePicker } from '@/shared/ui/datePicker/DatePicker'

const meta = {
  argTypes: {
    disabled: { control: 'boolean' },
    error: { control: 'text' },
    label: { control: 'text' },
  },
  component: DatePicker,
  tags: ['autodocs'],
  title: 'Components/DatePicker',
} satisfies Meta<typeof DatePicker>

export default meta

type Story = StoryObj<typeof meta>

export const DatePickerDefault: Story = {
  render: () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date())
    const handleChange = (date: Date | null) => {
      setStartDate(date)
    }

    return <DatePicker onChange={handleChange} startDate={startDate ?? undefined} />
  },
}

export const DatePickerWithRange: Story = {
  render: () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date('November 15, 2024'))
    const [endDate, setEndDate] = useState<Date | null>(new Date('November 24, 2024'))
    const handleChange = (date: [Date | null, Date | null]) => {
      const [start, end] = date

      setStartDate(start)
      setEndDate(end)
    }

    return (
      <DatePicker
        endDate={endDate ?? undefined}
        onChange={handleChange}
        selectsRange
        startDate={startDate ?? undefined}
      />
    )
  },
}

export const DatePickerWithLabel: Story = {
  args: {
    label: 'Date',
    startDate: new Date('November 15, 2024'),
  },
}

export const DatePickerWithError: Story = {
  args: {
    error: 'Error!',
    startDate: new Date('November 15, 2024'),
  },
}

export const DatePickerDisabled: Story = {
  args: {
    disabled: true,
    label: 'Date',
    startDate: new Date('November 15, 2024'),
  },
}
