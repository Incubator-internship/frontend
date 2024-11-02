'use client'
import React, { ComponentPropsWithoutRef, ComponentType, ElementRef, forwardRef } from 'react'

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
import clsx from 'clsx'
import Link from 'next/link'

import s from './sidebar.module.scss'

import { Typography } from '../typography'

const menuItems = [
  {
    Icon: HomeIcon,
    IconOutline: HomeOutlineIcon,
    label: 'Home',
  },
  {
    Icon: PlusSquareIcon,
    IconOutline: PlusSquareOutlineIcon,
    label: 'Create',
  },
  {
    Icon: PersonIcon,
    IconOutline: PersonOutlineIcon,
    label: 'My Profile',
  },
  {
    Icon: MessageCircleIcon,
    IconOutline: MessageCircleOutlineIcon,
    label: 'Messenger',
  },
  {
    Icon: SearchIcon,
    IconOutline: SearchOutlineIcon,
    label: 'Search',
  } /*                                                */,
  {
    Icon: TrendingUpIcon,
    IconOutline: TrendingUpOutlineIcon,
    label: 'Statistics',
  },
  {
    Icon: BookmarkIcon,
    IconOutline: BookmarkOutlineIcon,
    label: 'Favourites',
  },
]

export type ItemProps = {
  Icon: ComponentType<{}>
  IconOutline: ComponentType<{}>
  disabled?: boolean
  isSelected: boolean
  label?: string
}

export const Item = ({
  Icon,
  IconOutline,
  disabled = false,
  isSelected = false,
  label,
}: ItemProps) => {
  return (
    <Typography
      as={Link}
      className={s.item}
      data-disabled={disabled}
      data-selected={isSelected}
      href={''}
      variant={'mediumText14'}
    >
      {isSelected ? <Icon /> : <IconOutline />}
      {label}
    </Typography>
  )
}

type SidebarProps = ComponentPropsWithoutRef<'nav'>
type SidebarRef = ElementRef<'nav'>

export const Sidebar = forwardRef<SidebarRef, SidebarProps>(({ className, ...rest }, ref) => {
  //TODO: path via useRouter to isSelected(path===router.path)

  return (
    <nav className={clsx(s.nav, className)} ref={ref} {...rest}>
      <div className={s.navItems}>
        {menuItems.slice(0, 5).map(({ Icon, IconOutline, label }) => {
          return (
            <Item
              Icon={Icon}
              IconOutline={IconOutline}
              disabled={label === 'Messenger'}
              isSelected={false}
              key={label}
              label={label}
            />
          )
        })}
      </div>
      <div className={s.navItems}>
        {menuItems.slice(5, 7).map(({ Icon, IconOutline, label }) => {
          return (
            <Item
              Icon={Icon}
              IconOutline={IconOutline}
              isSelected={label === 'Favourites'}
              key={label}
              label={label}
            />
          )
        })}
      </div>
      <div className={s.navItems}>
        <Typography as={'button'} className={s.item} onClick={() => {}} variant={'mediumText14'}>
          <LogOutOutlineIcon />
          Log Out
        </Typography>
      </div>
    </nav>
  )
})

export default Sidebar
