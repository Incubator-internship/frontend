import type { Meta, StoryObj } from '@storybook/react'

import { FormValues, PasswordForm } from './PasswordForm'

const meta = {
  component: PasswordForm,
  tags: ['autodocs'],
  title: 'forms/PasswordForm',
} satisfies Meta<typeof PasswordForm>

export default meta
type Story = StoryObj<typeof meta>

const handleSubmit = (data: FormValues) => {
  console.log(data)
}

export const PasswordFormDefault: Story = {
  args: {
    onSubmit: handleSubmit,
  },
}
