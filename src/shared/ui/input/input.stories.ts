import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '@/shared/ui/input/Input'

const meta = {
  argTypes: {
    disabled: { control: 'boolean' },
    error: { control: 'text' },
    label: { control: 'text' },
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email'],
    },
    value: { control: 'text' },
  },
  component: Input,
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const InputDefault: Story = {
  args: {},
}
export const InputWithLabel: Story = {
  args: {
    label: 'Label',
  },
}
export const InputWithPlaceholder: Story = {
  args: {
    placeholder: 'Placeholder',
  },
}
export const InputPassword: Story = {
  args: {
    label: 'Password',
    variant: 'password',
  },
}

export const InputSearch: Story = {
  args: {
    onReset: () => {},
    variant: 'search',
  },
}

export const InputSearchWithValue: Story = {
  args: {
    onReset: () => {},
    value: 'Epam@epam.com',
    variant: 'search',
  },
}

export const InputWithError: Story = {
  args: {
    error: 'Error',
  },
}

export const InputDisabled: Story = {
  args: {
    disabled: true,
  },
}

export const InputDisabledWithLabel: Story = {
  args: {
    disabled: true,
    label: 'Label',
  },
}

export const InputPasswordDisabled: Story = {
  args: {
    disabled: true,
    variant: 'password',
  },
}
export const InputSearchDisabled: Story = {
  args: {
    disabled: true,
    variant: 'search',
  },
}
