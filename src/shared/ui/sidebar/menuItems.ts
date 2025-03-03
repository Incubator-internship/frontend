import React from 'react'

import {
  BookmarkIcon,
  BookmarkOutlineIcon,
  HomeIcon,
  HomeOutlineIcon,
  LogOutIcon,
  LogOutOutlineIcon,
  MessageCircleIcon,
  MessageCircleOutlineIcon,
  PersonIcon,
  PersonOutlineIcon,
  PlusSquareIcon,
  PlusSquareOutlineIcon,
  SearchIcon,
  SearchOutlineIcon,
  TrendingUpIcon,
  TrendingUpOutlineIcon,
} from '@/shared/assets/icons'
import { useTranslations } from 'next-intl'

export type MenuItem = {
  Icon: React.ComponentType<{}>
  IconOutline: React.ComponentType<{}>
  disabled?: boolean
  label: string
  onClick?: () => void
  path: string
}

export const getMenuItems = (
  toggleCreateModal: () => void,
  toggleLogoutModal: () => void
): MenuItem[] => [
  { Icon: HomeIcon, IconOutline: HomeOutlineIcon, label: 'Home', path: '/home' },
  {
    Icon: PlusSquareIcon,
    IconOutline: PlusSquareOutlineIcon,
    label: 'Create',
    onClick: toggleCreateModal,
    path: '',
  },
  { Icon: PersonIcon, IconOutline: PersonOutlineIcon, label: 'My Profile', path: '/profile' },
  {
    Icon: MessageCircleIcon,
    IconOutline: MessageCircleOutlineIcon,
    disabled: true,
    label: 'Messenger',
    path: '/messenger',
  },
  {
    Icon: SearchIcon,
    IconOutline: SearchOutlineIcon,
    disabled: true,
    label: 'Search',
    path: '/search',
  },
  {
    Icon: TrendingUpIcon,
    IconOutline: TrendingUpOutlineIcon,
    label: 'Statistics',
    path: '/statistics',
  },
  {
    Icon: BookmarkIcon,
    IconOutline: BookmarkOutlineIcon,
    disabled: true,
    label: 'Favourites',
    path: '/favourites',
  },
  {
    Icon: LogOutIcon,
    IconOutline: LogOutOutlineIcon,
    label: 'Log Out',
    onClick: toggleLogoutModal,
    path: '',
  },
]
