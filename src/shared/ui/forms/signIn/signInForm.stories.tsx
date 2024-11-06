import type { Meta, StoryObj } from '@storybook/react'

import { SignInForm } from '@/shared/ui/forms/signIn/SignInForm'

const meta = {
  component: SignInForm,
  tags: ['autodocs'],
  title: 'Components/Forms/SignInForm',
} satisfies Meta<typeof SignInForm>

export default meta
type Story = StoryObj<typeof meta>

export const SignIn: Story = {
  args: {
    onSubmit: data => console.log('onSubmit', data),
  },
}
