import type { Meta, StoryObj } from '@storybook/react'

import { SignUpForm, SignUpFormValues } from '@/shared/ui/forms/signUp/SignUpForm'

const meta = {
  component: SignUpForm,
  tags: ['autodocs'],
  title: 'forms/SignUp',
} satisfies Meta<typeof SignUpForm>

export default meta
type Story = StoryObj<typeof meta>
const handleSignUp = (data: Omit<SignUpFormValues, 'confirmPassword'>) => {
  console.log('Form Data:', data)
}

export const SignUp: Story = {
  args: {
    onSubmit: handleSignUp,
  },
}
