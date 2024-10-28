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
  {
    Icon: LogOutIcon,
    IconOutline: LogOutOutlineIcon,
    label: 'LogOut',
  },
]

export type ItemProps = {
  Icon: ComponentType<{}>
  IconOutline: ComponentType<{}>
  isSelected: boolean
  label?: string
}

export const Item = ({ Icon, IconOutline, isSelected, label }: ItemProps) => {
  return (
    <Typography
      as={Link}
      className={s.item}
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
  return (
    <nav className={clsx(s.nav, className)} ref={ref} {...rest}>
      <div className={s.nav_items}>
        {menuItems.slice(0, 5).map(({ Icon, IconOutline, label }, index) => {
          return (
            <Item
              Icon={Icon}
              IconOutline={IconOutline}
              isSelected={false}
              key={index}
              label={label}
            />
          )
        })}
      </div>
      <div className={s.nav_items}>
        {menuItems.slice(5, 7).map(({ Icon, IconOutline, label }, index) => {
          return (
            <Item
              Icon={Icon}
              IconOutline={IconOutline}
              isSelected={false}
              key={label + index}
              label={label}
            />
          )
        })}
      </div>
      <div className={s.nav_items}>
        {menuItems.slice(7).map(({ Icon, IconOutline, label }, index) => {
          return (
            <Item
              Icon={Icon}
              IconOutline={IconOutline}
              isSelected={false}
              key={label + index}
              label={label}
            />
          )
        })}
      </div>
    </nav>
  )
})

export default Sidebar
