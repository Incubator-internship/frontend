import { Meta, StoryObj } from '@storybook/react'

import Recaptcha from './Recaptcha'

const sitekey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string

const meta: Meta<typeof Recaptcha> = {
  argTypes: {
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    sitekey: {
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
    sitekey: sitekey,
  },
  name: 'ReCaptcha Default',
}

export const ErrorStory: Story = {
  args: {
    error: 'Verification failed',
    sitekey: sitekey,
  },
  name: 'ReCaptcha Error',
}
