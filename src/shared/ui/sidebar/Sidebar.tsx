'use client'
import React, {
  ComponentPropsWithoutRef,
  ComponentType,
  ElementRef,
  forwardRef,
  useState,
} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useLogoutMutation } from '@/app/api/auth/authApi'
import { loginStore, logoutStore, selectAuthState } from '@/app/config/store/authSlice'
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
import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'

import s from './sidebar.module.scss'

import { Button } from '../button'
import { Modal } from '../modal'
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
  const router = useRouter()
  const dispatch = useDispatch()
  const locale = useLocale()

  const [isModalOpen, setModalOpen] = useState<boolean>(false)
  const [logout] = useLogoutMutation()

  const toggleModal = () => setModalOpen(prevState => !prevState)
  const handleLogoutConfirm = () => {
    logout()
    dispatch(logoutStore())
    router.push(`/${locale}`)
    toggleModal()
  }

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
        <Typography
          as={'button'}
          className={s.item}
          onClick={() => setModalOpen(prevState => !prevState)}
          variant={'mediumText14'}
        >
          <LogOutOutlineIcon />
          Log Out
        </Typography>
      </div>
      <Modal isOpen={isModalOpen} onClose={toggleModal} title={'Log Out'}>
        <Typography as={'p'} className={s.sidebarModalText} variant={'body1'}>
          Are you really want to log out of your account “Epam@epam.com”?
        </Typography>
        <div className={s.buttonWrapper}>
          <Button as={'button'} className={s.sidebarModalButton} onClick={handleLogoutConfirm}>
            Yes
          </Button>
          <Button as={'button'} className={s.sidebarModalButton} onClick={toggleModal}>
            No
          </Button>
        </div>
      </Modal>
    </nav>
  )
})

export default Sidebar
