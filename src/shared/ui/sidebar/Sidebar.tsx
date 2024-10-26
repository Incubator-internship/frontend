'use client'
import React, { ComponentPropsWithoutRef, ComponentType, ElementRef, forwardRef } from 'react'

import {
  BookmarkIcon,
  BookmarkOutlineIcon,
  HomeIcon,
  HomeOutlineIcon,
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

type ItemProps = {
  Icon: ComponentType<{ className: string }>
  IconOutline: ComponentType<{ className: string }>
  isSelected: boolean
  label?: string
}

export const Item = ({ Icon, IconOutline, isSelected, label }: ItemProps) => {
  return (
    <Typography
      as={Link}
      className={s.title}
      data-active={isSelected}
      href={''}
      variant={'mediumText14'}
    >
      {isSelected ? <Icon className={s.icon} /> : <IconOutline className={s.icon} />}
      {label}
    </Typography>
  )
}

export const Sidebar = () => {
  return (
    <>
      <Item
        Icon={menuItems[0].Icon}
        IconOutline={menuItems[0].IconOutline}
        isSelected={false}
        label={menuItems[0].label}
      />
    </>
  )
}

export default Sidebar
