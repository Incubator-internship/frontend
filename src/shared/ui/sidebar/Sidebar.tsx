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
import { usePathname, useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'

import s from './sidebar.module.scss'

import { Button } from '../button'
import { Modal } from '../modal'
import { Typography } from '../typography'

const menuItems = [
  { Icon: HomeIcon, IconOutline: HomeOutlineIcon, label: 'Home', path: '/home' },
  { Icon: PlusSquareIcon, IconOutline: PlusSquareOutlineIcon, label: 'Create', path: '/create' },
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
]

export type ItemProps = {
  Icon: ComponentType<{}>
  IconOutline: ComponentType<{}>
  disabled?: boolean
  isSelected: boolean
  label?: string
  path: string
}

export const Item = ({
  Icon,
  IconOutline,
  disabled = false,
  isSelected = false,
  label,
  path,
}: ItemProps) => {
  const router = useRouter()
  const locale = useLocale()

  return (
    <Typography
      as={'button'}
      className={s.item}
      data-disabled={disabled}
      data-selected={isSelected}
      onClick={() => router.push(`/${locale}/${path}`)}
      variant={'mediumText14'}
    >
      {isSelected ? <Icon /> : <IconOutline />} {label}
    </Typography>
  )
}

type SidebarProps = ComponentPropsWithoutRef<'nav'>
type SidebarRef = ElementRef<'nav'>

export const Sidebar = forwardRef<SidebarRef, SidebarProps>(({ className, ...rest }, ref) => {
  const authState = useSelector(selectAuthState)
  const router = useRouter()
  const dispatch = useDispatch()
  const locale = useLocale()
  const pathname = usePathname()

  console.log('pathname', pathname)

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
        {menuItems.slice(0, 7).map(({ Icon, IconOutline, disabled, label, path }) => {
          return (
            <Item
              Icon={Icon}
              IconOutline={IconOutline}
              disabled={disabled}
              isSelected={pathname === `/${locale}${path}`}
              key={label}
              label={label}
              path={path}
            />
          )
        })}
      </div>
      {/* <div className={s.navItems}>
        {menuItems.slice(5, 7).map(({ Icon, IconOutline, disabled, label, path }) => {
          return (
            <Item
              Icon={Icon}
              IconOutline={IconOutline}
              disabled={disabled}
              isSelected={pathname === path}
              key={label}
              label={label}
              path={path}
            />
          )
        })}
      </div> */}
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
