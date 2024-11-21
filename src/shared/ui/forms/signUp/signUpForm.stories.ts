import type { Meta, StoryObj } from '@storybook/react'

import { FormValues, SignUpForm } from '@/shared/ui/forms/signUp/SignUpForm'

const meta = {
  component: SignUpForm,
  tags: ['autodocs'],
  title: 'forms/SignUp',
} satisfies Meta<typeof SignUpForm>

export default meta
type Story = StoryObj<typeof meta>
const handleSignUp = (data: Omit<FormValues, 'confirmPassword'>) => {
  console.log('Form Data:', data)
}

export const SignUp: Story = {
  args: {
    onSubmit: handleSignUp,
  },
}
