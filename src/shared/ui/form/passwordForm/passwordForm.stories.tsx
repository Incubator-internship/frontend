import { useForm } from 'react-hook-form'

import { Meta, StoryObj } from '@storybook/react'

import { PasswordForm } from './PasswordForm'

const meta = {
  component: PasswordForm,
  tags: ['autodocs'],
  title: 'Components/PasswordForm',
} satisfies Meta<typeof PasswordForm>

export default meta

type Story = StoryObj<typeof meta>

export const PasswordFormDefault: Story = {
  args: {
    newPassword: '12345678',
    passwordConfirmation: '12345678',
    validationError: null,
  },
}

export const PasswordFormWithValidationError: Story = {
  args: {
    newPassword: '123456789',
    passwordConfirmation: '12345678',
    validationError: 'The passwords must match',
  },
}

export const PasswordFormWithShortPassword: Story = {
  args: {
    newPassword: '1111',
    passwordConfirmation: '1111',
    validationError: 'The password must be between 6 and 20 characters',
  },
}

export const PasswordFormWithLongPassword: Story = {
  args: {
    newPassword: '1111111111111111111111111',
    passwordConfirmation: '1111111111111111111111111',
    validationError: 'The password must be between 6 and 20 characters',
  },
}
