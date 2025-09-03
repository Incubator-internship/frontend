'use client'
import React, {
  ComponentPropsWithoutRef,
  ComponentType,
  ElementRef,
  forwardRef,
  useState,
} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useGetMeQuery, useLogoutMutation } from '@/app/api/auth/authApi'
import { logoutStore, selectAuthState } from '@/app/config/store/authSlice'
import CreatePost from '@/features/addPost/ui/createPost/CreatePost'
import { Portal } from '@/shared/ui/portal/Portal'
import clsx from 'clsx'
import { redirect, usePathname, useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'

import s from './sidebar.module.scss'

import { Button } from '../button'
import { Modal } from '../modal'
import { Typography } from '../typography'
import { getMenuItems } from './menuItems'

type SidebarProps = ComponentPropsWithoutRef<'nav'>
type SidebarRef = ElementRef<'nav'>

export const Sidebar = forwardRef<SidebarRef, SidebarProps>(({ className, ...rest }, ref) => {
  const authState = useSelector(selectAuthState)
  const router = useRouter()
  const dispatch = useDispatch()
  const locale = useLocale()
  const pathname = usePathname()
  const t = useTranslations('Sidebar')

  const { data: me } = useGetMeQuery()

  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false)
  const [isOpenMainPostModal, setIsOpenMainPostModal] = useState<boolean>(false)
  const [isOpenStepsPostModal, setIsOpenStepsPostModal] = useState<boolean>(false)
  const openPostModal = isOpenMainPostModal || isOpenStepsPostModal
  const [logout] = useLogoutMutation()

  const toggleCreateModal = () => setIsOpenMainPostModal(prev => !prev)
  const toggleLogoutModal = () => setLogoutModalOpen(prev => !prev)

  const handleLogoutConfirm = () => {
    logout().unwrap()
    localStorage.removeItem('accessToken')
    router.push(`/${locale}`)
    router.refresh()
    toggleLogoutModal()
  }

  const menuItems = getMenuItems(toggleCreateModal, toggleLogoutModal, t)

  return (
    <nav className={clsx(s.nav, className)} ref={ref} {...rest}>
      <div className={s.navItems}>
        {menuItems.map(({ Icon, IconOutline, disabled, label, onClick, path }) => (
          <Item
            Icon={Icon}
            IconOutline={IconOutline}
            disabled={disabled}
            isSelected={pathname === `/${locale}${path}`}
            key={label}
            label={label}
            onClick={onClick}
            path={path}
          />
        ))}
      </div>

      {/* Modal Logout */}
      <Modal
        className={s.sidebarModal}
        isOpen={isLogoutModalOpen}
        onClose={toggleLogoutModal}
        title={'Log Out'}
      >
        <Typography as={'p'} className={s.sidebarModalText} variant={'body1'}>
          {t('Are you really want to log out of your account')} <b>{me?.email}</b>?
        </Typography>
        <div className={s.buttonWrapper}>
          <Button className={s.sidebarModalButton} onClick={handleLogoutConfirm}>
            {t('Yes')}
          </Button>
          <Button className={s.sidebarModalButton} onClick={toggleLogoutModal}>
            {t('No')}
          </Button>
        </div>
      </Modal>

      {/* Modal Create */}
      {openPostModal && (
        <Portal containerId={'portal'}>
          <CreatePost
            isOpenMainPostModal={isOpenMainPostModal}
            isOpenStepsPostModal={isOpenStepsPostModal}
            setIsOpenMainPostModal={setIsOpenMainPostModal}
            setIsOpenStepsPostModal={setIsOpenStepsPostModal}
          />
        </Portal>
      )}
    </nav>
  )
})

export type ItemProps = {
  Icon: ComponentType<{}>
  IconOutline: ComponentType<{}>
  disabled?: boolean
  isSelected: boolean
  label?: string
  onClick?: () => void
  path: string
}

export const Item = ({
  Icon,
  IconOutline,
  disabled = false,
  isSelected = false,
  label,
  onClick,
  path,
}: ItemProps) => {
  const router = useRouter()
  const locale = useLocale()

  const handleClick = () => {
    if (disabled) {
      return
    }
    if (onClick) {
      onClick()
    } else {
      router.push(`/${locale}${path}`)
    }
  }

  return (
    <Typography
      as={'button'}
      className={s.item}
      data-disabled={disabled}
      data-selected={isSelected}
      onClick={handleClick}
      variant={'mediumText14'}
    >
      {isSelected ? <Icon /> : <IconOutline />} {label}
    </Typography>
  )
}

export default Sidebar
