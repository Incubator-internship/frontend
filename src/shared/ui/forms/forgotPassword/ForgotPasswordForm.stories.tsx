import { ForgotPasswordForm } from '@/shared/ui/forms/forgotPassword/ForgotPasswordForm'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ForgotPasswordForm> = {
  component: ForgotPasswordForm,
  tags: ['autodocs'],
  title: 'forms/ForgotPasswordForm',
}

export default meta
type Story = StoryObj<typeof ForgotPasswordForm>

export const DefaultPasswordForm: Story = {
  args: {
    onSubmit: data => console.log('onSubmit', data),
  },
}
