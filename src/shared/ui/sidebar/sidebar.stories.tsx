import type { Meta, StoryObj } from '@storybook/react'

import { Sidebar } from './Sidebar'

const meta: Meta<typeof Sidebar> = {
  argTypes: { onClick: { action: 'clicked' } },
  component: Sidebar,
  tags: ['autodocs'],
  title: 'Components/Sidebar',
}

export default meta

export const Default: StoryObj<typeof Sidebar> = {
  args: {},
  name: 'Sidebar Default',
}
