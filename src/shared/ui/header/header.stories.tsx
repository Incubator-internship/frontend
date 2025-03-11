import type { Meta, StoryObj } from '@storybook/react'

import { Header } from '@/shared/ui/header/Header'

const meta: Meta<typeof Header> = {
  component: Header,
  tags: ['autodocs'],
  title: 'components/Header',
}

export default meta

type Story = StoryObj<typeof meta>

export const HeaderAuthFalse: Story = {
  args: {},
}

export const HeaderAuth: Story = {
  args: {
    isAuth: true,
  },
}

export const HeaderAuthNotification: Story = {
  args: {
    isAuth: true,
  },
}
