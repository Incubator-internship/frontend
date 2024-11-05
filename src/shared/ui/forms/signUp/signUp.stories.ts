import type { Meta, StoryObj } from '@storybook/react'

import { FormValues, SignUp } from '@/shared/ui/forms/signUp/SignUp'

const meta = {
  component: SignUp,
  tags: ['autodocs'],
  title: 'forms/SignUp',
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>
const handleSignUp = (data: Omit<FormValues, 'confirmPassword'>) => {
  console.log('Form Data:', data)
}

export const SignUpForm: Story = {
  args: {
    onSubmit: handleSignUp,
  },
}
