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

export const UserInformation: Story = {
  args: {
    onSubmit: handleSignUp,
  },
}

export const UserInformationWithDefaultValues: Story = {
  args: {
    onSubmit: handleSignUp,
    userInformation: {
      aboutMe: 'Hi!',
      city: '',
      country: '',
      dateOfBirth: '04.04.2000',
      firstName: 'Ivan',
      lastName: 'Ivanov',
      username: 'Ivan',
    },
  },
}
