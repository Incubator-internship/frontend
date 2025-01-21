import { useState } from 'react'

import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { NextIntlClientProvider } from 'next-intl'

import messages from '../../../../messages/en.json'
import { Toggle } from './Toggle'

const meta = {
  component: Toggle,
  tags: ['autodocs'],
  title: 'Components/Toggle',
} satisfies Meta<typeof Toggle>

export default meta

type Story = StoryObj<typeof meta>

const withIntlProvider = (Story: StoryFn) => (
  <NextIntlClientProvider locale={'en'} messages={messages}>
    <Story />
  </NextIntlClientProvider>
)

export const ToggleDefault: Story = {
  args: {
    setToggle: (toggle: 'Month' | 'Week') => {},
    toggle: 'Week',
  },
  decorators: [withIntlProvider],
  render: args => {
    const [toggle, setToggle] = useState<'Month' | 'Week'>(args.toggle)

    const handleToggle = (newToggle: 'Month' | 'Week') => {
      setToggle(newToggle)
      args.setToggle(newToggle)
    }

    return <Toggle setToggle={handleToggle} toggle={toggle} />
  },
}
