import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '@/shared/ui/card/Card'

const meta: Meta<typeof Card> = {
  component: Card,
  tags: ['autodocs'],
  title: 'components/Card',
}

export default meta

type Story = StoryObj<typeof meta>

export const CardDefault: Story = {
  args: {},
}
