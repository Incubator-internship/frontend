import { Meta, StoryObj } from '@storybook/react'

import { Tabs } from './tabs'

const meta = {
  component: Tabs,
  tags: ['autodocs'],
  title: 'Components/Tabs',
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof meta>

export const TabSwitcher: Story = {
  args: {
    tabs: [],
    value: '',
  },
  parameters: {
    group: 'Default',
    title: 'default',
  },
  render: () => {
    const tabs = [
      { title: 'Switcher', value: 'tab1' },
      { title: 'Switcher', value: 'active' },
      { title: 'Switcher', value: 'tab3' },
      { disabled: true, title: 'Switcher', value: 'tab3' },
      { title: 'Switcher', value: 'tab3' },
    ]

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ marginBottom: '10px' }}>Default</h2>
          <Tabs tabs={tabs} value={'null'} />
        </div>
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ marginBottom: '10px' }}>Active</h2>
          <Tabs tabs={tabs} value={'active'} />
        </div>
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ marginBottom: '10px' }}>Hover</h2>
          <Tabs tabs={tabs} value={''} />
        </div>
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ marginBottom: '10px' }}>Disabled</h2>
          <Tabs tabs={tabs} value={'null'} />
        </div>
      </div>
    )
  },
}

export const TabDefault: Story = {
  args: {
    tabs: [
      { title: 'Switcher', value: '1' },
      { title: 'Switcher', value: '2' },
      { title: 'Switcher', value: '3' },
      { title: 'Switcher', value: '4' },
      { title: 'Switcher', value: '4' },
    ],
    value: 'active',
  },
}

export const TabActive: Story = {
  args: {
    tabs: [
      { title: 'Switcher', value: '1' },
      { title: 'Switcher', value: 'active' },
      { title: 'Switcher', value: '3' },
      { title: 'Switcher', value: '4' },
      { title: 'Switcher', value: '4' },
    ],
    value: 'active',
  },
}

export const TabHover: Story = {
  args: {
    tabs: [
      { title: 'Switcher', value: '1' },
      { title: 'Switcher', value: '2' },
      { title: 'Switcher', value: '3' },
      { title: 'Switcher', value: '4' },
      { title: 'Switcher', value: '4' },
    ],
    value: 'active',
  },
}

export const TabDisabled: Story = {
  args: {
    tabs: [
      { disabled: true, title: 'Switcher', value: '1' },
      { disabled: true, title: 'Switcher', value: '2' },
      { disabled: true, title: 'Switcher', value: '3' },
      { disabled: true, title: 'Switcher', value: '4' },
      { disabled: true, title: 'Switcher', value: '4' },
    ],
    value: 'active',
  },
}
