import { ReactNode } from 'react'

import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { NextIntlClientProvider } from 'next-intl'

import messages from '../../../../messages/en.json'
import StatisticScreen from './StatisticScreen'

const meta = {
  component: StatisticScreen,
  title: 'Components/StatisticScreen',
} satisfies Meta<typeof StatisticScreen>

export default meta

type Story = StoryObj<typeof meta>

const withIntlProvider = (Story: StoryFn) => (
  <NextIntlClientProvider locale={'en'} messages={messages}>
    <Story />
  </NextIntlClientProvider>
)

export const Comments: Story = {
  args: {
    category: 'Comments',
  },
  decorators: [withIntlProvider],
  render: args => <StatisticScreen {...args} />,
}

export const Likes: Story = {
  args: {
    category: 'Like',
  },
  decorators: [withIntlProvider],
  render: args => <StatisticScreen {...args} />,
}

export const PublicationViews: Story = {
  args: {
    category: 'Publication views',
  },
  decorators: [withIntlProvider],
  render: args => <StatisticScreen {...args} />,
}

export const CommentsRu: Story = {
  args: {
    category: 'Комментарии',
  },
  decorators: [withIntlProvider],
  render: args => <StatisticScreen {...args} />,
}

export const LikesRu: Story = {
  args: {
    category: 'Нравится',
  },
  decorators: [withIntlProvider],
  render: args => <StatisticScreen {...args} />,
}

export const PublicationViewsRu: Story = {
  args: {
    category: 'Просмотры публикаций',
  },
  decorators: [withIntlProvider],
  render: args => <StatisticScreen {...args} />,
}
