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

export const H1: Story = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
  },
}
