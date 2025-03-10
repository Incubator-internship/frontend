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
  toggleLogoutModal: () => void,
  t: (key: string) => string
): MenuItem[] => [
  { Icon: HomeIcon, IconOutline: HomeOutlineIcon, label: t('Home'), path: '/home' },
  {
    Icon: PlusSquareIcon,
    IconOutline: PlusSquareOutlineIcon,
    label: t('Create'),
    onClick: toggleCreateModal,
    path: '',
  },
  { Icon: PersonIcon, IconOutline: PersonOutlineIcon, label: t('My Profile'), path: '/profile' },
  {
    Icon: MessageCircleIcon,
    IconOutline: MessageCircleOutlineIcon,
    disabled: true,
    label: t('Messenger'),
    path: '/messenger',
  },
  {
    Icon: SearchIcon,
    IconOutline: SearchOutlineIcon,
    disabled: true,
    label: t('Search'),
    path: '/search',
  },
  {
    Icon: TrendingUpIcon,
    IconOutline: TrendingUpOutlineIcon,
    label: t('Statistics'),
    path: '/statistics',
  },
  {
    Icon: BookmarkIcon,
    IconOutline: BookmarkOutlineIcon,
    disabled: true,
    label: t('Favorites'),
    path: '/favourites',
  },
  {
    Icon: LogOutIcon,
    IconOutline: LogOutOutlineIcon,
    label: t('Logout'),
    onClick: toggleLogoutModal,
    path: '',
  },
]
