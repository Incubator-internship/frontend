import { Meta, StoryObj } from '@storybook/react'

import RecaptchaComponent from './Recaptcha'

const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || 'your-default-site-key'

const meta: Meta<typeof RecaptchaComponent> = {
  argTypes: {
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    onChange: {
      action: 'changed',
      description: 'Callback triggered on reCAPTCHA value change',
    },
    siteKey: {
      control: 'text',
      description: 'Google reCAPTCHA site key',
    },
  },
  component: RecaptchaComponent,
  tags: ['autodocs'],
  title: 'Components/Recaptcha',
}

export default meta
type Story = StoryObj<typeof RecaptchaComponent>

export const Default: Story = {
  args: {
    error: '',
    siteKey: siteKey,
  },
  name: 'ReCaptcha Default',
}

export const ErrorStory: Story = {
  args: {
    error: 'Verification failed',
    siteKey: siteKey,
  },
  name: 'ReCaptcha with Error',
}
