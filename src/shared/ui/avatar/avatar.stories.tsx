import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, AvatarFallback, AvatarImage } from './Avatar'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Avatar',
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    className: '',
  },
  render: args => (
    <Avatar {...args}>
      <AvatarImage alt={'User Avatar'} src={'https://github.com/shadcn.png'} />
      <AvatarFallback>DK</AvatarFallback>
    </Avatar>
  ),
}

export const WithImage: Story = {
  render: () => (
    <Avatar>
      <AvatarImage alt={'User Avatar'} src={'https://github.com/shadcn.png'} />
      <AvatarFallback>DK</AvatarFallback>
    </Avatar>
  ),
}

export const FallbackOnly: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>DK</AvatarFallback>
    </Avatar>
  ),
}

export const CustomSize: Story = {
  render: () => (
    <Avatar className={'custom-avatar'}>
      <AvatarImage alt={'User Avatar'} src={'https://github.com/shadcn.png'} />
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
  ),
}

const style = document.createElement('style')

style.innerHTML = `
  .custom-avatar {
    width: 80px;
    height: 80px;
  }
`
document.head.appendChild(style)
