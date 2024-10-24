import type { Meta, StoryObj } from '@storybook/react'

import { Header } from '@/shared/ui/header/Header'

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'components/Header',
}

export default meta

type Story = StoryObj<typeof meta>

export const HeaderDefault: Story = {
  args: {},
}
