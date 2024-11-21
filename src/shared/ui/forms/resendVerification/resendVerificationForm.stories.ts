import type { Meta, StoryObj } from '@storybook/react'

import {
  ResendVerificationForm,
  ResendVerificationFormValues,
} from '@/shared/ui/forms/resendVerification/ResendVerificationForm'

const meta = {
  component: ResendVerificationForm,
  tags: ['autodocs'],
  title: 'forms/ResendVerification',
} satisfies Meta<typeof ResendVerificationForm>

export default meta
type Story = StoryObj<typeof meta>
const handleSignUp = (data: ResendVerificationFormValues) => {
  console.log('Form Data:', data)
}

export const ResendVerification: Story = {
  args: {
    onSubmit: handleSignUp,
  },
}
