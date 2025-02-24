'use client'

import { useState } from 'react'
import { useSelector } from 'react-redux'

import { useGetMeQuery } from '@/app/api/auth/authApi'
import { selectAuthState } from '@/app/config/store/authSlice'
import UnfollowIcon from '@/shared/assets/icons/UnfollowIcon'
import { DataPost } from '@/views/publicPageModal/DataArray'
import { DropdownMenu } from '@radix-ui/react-dropdown-menu'
import { CopyIcon } from '@radix-ui/react-icons'

import s from './commentsHeader.module.scss'

import DropdownMenuDemo from '../../dropdownMenu/DropdownMenu'
import { ModalCloseDeleteUnfollowPost } from '../../modal/modalCreateOrDeletePost'
import { ProfileData } from '../profileData'

type CommentsHeaderProps = {
  postUserId?: number
  profileData?: DataPost
}
export const CommentsHeader: React.FC<CommentsHeaderProps> = ({ postUserId, profileData }) => {
  const isAuth = useSelector(selectAuthState)
  const isFollow = false
  const { data: userData } = useGetMeQuery()
  const myId = userData?.userId
  const [isOpenModal, setIsOpenModal] = useState(false)
  const currentUrl = window.location.href

  return (
    <div className={s.commentsHeader}>
      <ProfileData imageUrl={profileData?.imgProfile} profileUrl={profileData?.urlProfile} />
      {!isAuth && (
        <DropdownMenuDemo
          content={[
            {
              icon: <UnfollowIcon />,
              label: 'Unfollow',
              onSelect: () => setIsOpenModal(true),
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
        />
      )}
      {isOpenModal && <ModalCloseDeleteUnfollowPost variant={'unfollow'} />}
    </div>
  )
}
