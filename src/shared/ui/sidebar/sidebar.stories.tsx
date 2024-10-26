import type { Meta, StoryObj } from '@storybook/react'

import Sidebar from './Sidebar'

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  tags: ['autodocs'],
  title: 'Components/Sidebar',
}

export default meta

export const Default: StoryObj<typeof Sidebar> = {}
