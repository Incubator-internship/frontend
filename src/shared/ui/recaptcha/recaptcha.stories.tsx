import { Meta, StoryObj } from '@storybook/react'

import Recaptcha from './Recaptcha'

const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

const meta: Meta<typeof Recaptcha> = {
  argTypes: {
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    siteKey: {
      control: 'text',
      description: 'site key',
    },
  },
  component: Recaptcha,
  tags: ['autodocs'],
  title: 'Components/Recaptcha',
}

export default meta
type Story = StoryObj<typeof Recaptcha>

export const Default: Story = {
  args: {
    siteKey: siteKey,
  },
  name: 'ReCaptcha Default',
}

export const ErrorStory: Story = {
  args: {
    error: 'Verification failed',
    siteKey: siteKey,
  },
  name: 'ReCaptcha Error',
}
