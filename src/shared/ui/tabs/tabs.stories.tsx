import { Meta, StoryObj } from '@storybook/react'

import { Tabs } from './tabs'

const meta = {
  component: Tabs,
  tags: ['autodocs'],
  title: 'Components/Tabs',
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultTabs: Story = {
  args: {
    tabs: [
      { title: 'Switcher', value: 'Switcher' },
      { title: 'Switcher', value: 'Switcher' },
      { title: 'Switcher', value: 'Switcher' },
    ],
    value: 'Switcher',
  },
}
