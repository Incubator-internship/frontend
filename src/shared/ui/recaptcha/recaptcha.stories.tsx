import { Meta, StoryObj } from '@storybook/react'

import Recaptcha from './Recaptcha'

// в Storybook тк сторибук не имеет доступ к .env
const defaultSitekey = '6LeYP3QqAAAAAESr4XvYoiQ40gZHerd5UIpp1oFR'

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
    sitekey: defaultSitekey,
  },
  name: 'ReCaptcha Default',
}

export const ErrorStory: Story = {
  args: {
    error: 'Verification failed',
    sitekey: defaultSitekey,
  },
  name: 'ReCaptcha Error',
}
