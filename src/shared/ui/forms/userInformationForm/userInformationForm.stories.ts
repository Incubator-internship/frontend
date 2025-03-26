import type { Meta, StoryObj } from '@storybook/react'

import {
  UserInformationForm,
  UserInformationFormValues,
} from '@/shared/ui/forms/userInformationForm/UserInformationForm'

const meta = {
  component: UserInformationForm,
  tags: ['autodocs'],
  title: 'forms/UserInformation',
} satisfies Meta<typeof UserInformationForm>

export default meta
type Story = StoryObj<typeof meta>
const handleSignUp = (data: UserInformationFormValues) => {
  console.log('Form Data:', data)
}

export const SignUp: Story = {
  args: {
    onSubmit: handleSignUp,
  },
}
