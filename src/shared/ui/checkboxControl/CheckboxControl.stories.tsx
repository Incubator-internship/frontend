import { Meta, StoryObj } from '@storybook/react'

import { CheckboxControl } from './CheckboxControl'

const meta: Meta<typeof CheckboxControl> = {
  argTypes: {
    // error: {
    //   control: 'text',
    //   description: 'Error message to display',
    // },
    // siteKey: {
    //   control: 'text',
    //   description: 'site key',
    // },
  },
  component: CheckboxControl,
  tags: ['autodocs'],
  title: 'Components/CheckboxControl',
}

export default meta
type Story = StoryObj<typeof CheckboxControl>

export const Default: Story = {
  args: {
    // siteKey: siteKey,
  },
  name: 'CheckboxControl Default',
}
