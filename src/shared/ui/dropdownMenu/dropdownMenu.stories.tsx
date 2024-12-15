import CopyIcon from '@/shared/assets/icons/CopyIcon'
import FollowIcon from '@/shared/assets/icons/FollowIcon'
import PensilIcon from '@/shared/assets/icons/PensilIcon'
import TrashIcon from '@/shared/assets/icons/TrashIcon'
import UnfollowIcon from '@/shared/assets/icons/UnfollowIcon'
import DropdownMenu from '@/shared/ui/dropdownMenu/DropdownMenu'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof DropdownMenu> = {
  component: DropdownMenu,
  tags: ['autodocs'],
  title: 'components/DropdownMenu',
}

export default meta
type Story = StoryObj<typeof DropdownMenu>

export const PostsDropdownMenu: Story = {
  args: {
    content: [
      {
        icon: <PensilIcon />,
        label: 'Edit Post',
        onSelect: value => {
          console.log('click Edit Post', value)
        },
      },
      {
        icon: <TrashIcon />,
        label: 'Delete Post',
        onSelect: value => {
          console.log('click Delete Post', value)
        },
      },
    ],
  },
}

export const UnfollowDropdownMenu: Story = {
  args: {
    content: [
      {
        icon: <UnfollowIcon />,
        label: 'Unfollow',
        onSelect: value => {
          console.log('click Unfollow', value)
        },
      },
      {
        icon: <CopyIcon />,
        label: 'Copy Link',
        onSelect: value => {
          console.log('click Copy Link', value)
        },
      },
    ],
  },
}

export const FollowDropdownMenu: Story = {
  args: {
    content: [
      {
        icon: <FollowIcon />,
        label: 'Follow',
        onSelect: value => {
          console.log('click Follow', value)
        },
      },
      {
        icon: <CopyIcon />,
        label: 'Copy Link',
        onSelect: value => {
          console.log('click Copy', value)
        },
      },
    ],
  },
}
