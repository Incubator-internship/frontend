import ForgotPasswordForm from '@/shared/ui/form/forgotPassword/ForgotPasswordForm'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ForgotPasswordForm> = {
  argTypes: {},
  component: ForgotPasswordForm,
  tags: ['autodocs'],
  title: 'forms/ForgotPasswordForm',
}

export default meta
type Story = StoryObj<typeof ForgotPasswordForm>

export const DefaultStory: Story = {
  args: {
    isRequired: true,
    label: 'ForgotPasswordForm label',
  },
  name: 'Default ForgotPasswordForm',
}
