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
  args: {},
}

export const DatePickerWithLabel: Story = {
  args: {
    label: 'Date',
  },
}

export const DatePickerWithError: Story = {
  args: {
    error: 'Error!',
  },
}

export const DatePickerDisabled: Story = {
  args: {
    disabled: true,
    label: 'Date',
  },
}
