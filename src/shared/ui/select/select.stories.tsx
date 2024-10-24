import { Meta, StoryObj } from '@storybook/react'

import { Select } from './Select'

const meta = {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

const SelectItems = [
  { title: 'Option 1', value: '1' },
  { title: 'Option 2', value: '2' },
  { title: 'Option 3', value: '3' },
]

export const SelectDefault: Story = {
  args: {
    items: SelectItems,
    placeholder: 'Select an option',
  },
}

export const SelectDisabled: Story = {
  args: {
    disabled: true,
    items: SelectItems,
    placeholder: 'Select an option',
  },
}