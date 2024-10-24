import type { Meta, StoryObj } from '@storybook/react'

import { CustomDatePicker } from '@/shared/ui/datePicker/DatePicker'

const meta = {
  argTypes: {
    disabled: { control: 'boolean' },
    error: { control: 'text' },
    label: { control: 'text' },
  },
  component: CustomDatePicker,
  title: 'Components/DatePicker',
} satisfies Meta<typeof CustomDatePicker>

export default meta

type Story = StoryObj<typeof meta>

export const DatePickerDefault: Story = {
  args: {
    setStartDate: () => {},
    startDate: new Date(),
  },
}

export const DatePickerWithLabel: Story = {
  args: {
    label: 'Date',
    setStartDate: () => {},
    startDate: new Date('November 15, 2024'),
  },
}

export const DatePickerWithError: Story = {
  args: {
    error: 'Error!',
    setStartDate: () => {},
    startDate: new Date('November 15, 2024'),
  },
}

export const DatePickerDisabled: Story = {
  args: {
    disabled: true,
    label: 'Date',
    setStartDate: () => {},
    startDate: new Date('November 15, 2024'),
  },
}

export const DatePickerWithRange: Story = {
  args: {
    endDate: new Date('November 24, 2024'),
    label: 'Date',
    setEndDate: () => {},
    setStartDate: () => {},
    startDate: new Date('November 15, 2024'),
  },
}
