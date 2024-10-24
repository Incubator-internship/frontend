import { Meta, StoryObj } from '@storybook/react'

import { Tabs } from './Tabs'

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
    const tabsDefault = [
      { title: 'Switcher', value: 'tab1' },
      { title: 'Switcher', value: 'active' },
      { title: 'Switcher', value: 'tab3' },
      { title: 'Switcher', value: 'tab3' },
      { title: 'Switcher', value: 'tab3' },
    ]
    const tabsActive = [
      { title: 'Switcher', value: 'tab1' },
      { title: 'Switcher', value: 'active' },
      { title: 'Switcher', value: 'tab3' },
      { title: 'Switcher', value: 'tab3' },
      { title: 'Switcher', value: 'tab3' },
    ]
    const tabsHover = [
      { title: 'Switcher', value: 'tab1' },
      { title: 'Switcher', value: 'active' },
      { title: 'Switcher', value: 'tab3' },
      { title: 'Switcher', value: 'tab3' },
      { title: 'Switcher', value: 'tab3' },
    ]
    const tabsDisabled = [
      { disabled: true, title: 'Switcher', value: 'tab1' },
      { disabled: true, title: 'Switcher', value: 'active' },
      { disabled: true, title: 'Switcher', value: 'tab3' },
      { disabled: true, title: 'Switcher', value: 'tab3' },
      { disabled: true, title: 'Switcher', value: 'tab3' },
    ]

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ marginBottom: '10px' }}>Default</h2>
          <Tabs tabs={tabsDefault} value={'default'} />
        </div>
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ marginBottom: '10px' }}>Active</h2>
          <Tabs tabs={tabsActive} value={'active'} />
        </div>
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ marginBottom: '10px' }}>Hover</h2>
          <Tabs tabs={tabsHover} value={'hover'} />
        </div>
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ marginBottom: '10px' }}>Disabled</h2>
          <Tabs tabs={tabsDisabled} value={'disabled'} />
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
