import { Meta, StoryObj } from '@storybook/react'

import { Typography } from './typography'

const meta: Meta<typeof Typography> = {
  component: Typography,
  title: 'Components/Typography',
}

export default meta

type Story = StoryObj<typeof Typography>

export const Empty: Story = {
  args: {
    children: 'Hello, World!',
  },
}
