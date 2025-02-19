import CopyIcon from '@/shared/assets/icons/CopyIcon'
import FollowIcon from '@/shared/assets/icons/FollowIcon'
import PensilIcon from '@/shared/assets/icons/PensilIcon'
import TrashIcon from '@/shared/assets/icons/TrashIcon'
import UnfollowIcon from '@/shared/assets/icons/UnfollowIcon'

import DropdownMenuDemo from '../../dropdownMenu/DropdownMenu'

export const renderDropDownMenu = (myId?: number, isFollow?: boolean, postUserId?: number) => {
  const currentUrl = window.location.href

  if (myId === postUserId) {
    return (
      <DropdownMenuDemo
        content={[
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
        ]}
        isModal
      />
    )
  } else if (isFollow) {
    return (
      <DropdownMenuDemo
        content={[
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
            onSelect: async () => {
              try {
                await navigator.clipboard.writeText(currentUrl)
              } catch (err) {
                console.error('error:', err)
              }
            },
          },
        ]}
        isModal
      />
    )
  } else {
    return (
      <DropdownMenuDemo
        content={[
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
            onSelect: async () => {
              try {
                await navigator.clipboard.writeText(currentUrl)
              } catch (err) {
                console.error('error:', err)
              }
            },
          },
        ]}
        isModal
      />
    )
  }
}
