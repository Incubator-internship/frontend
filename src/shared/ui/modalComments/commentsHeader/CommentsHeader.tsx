'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

import { useGetMeQuery } from '@/app/api/auth/authApi'
import { selectAuthState } from '@/app/config/store/authSlice'
import FollowIcon from '@/shared/assets/icons/FollowIcon'
import PensilIcon from '@/shared/assets/icons/PensilIcon'
import TrashIcon from '@/shared/assets/icons/TrashIcon'
import UnfollowIcon from '@/shared/assets/icons/UnfollowIcon'
import { PostFormData, maximumCharactersSchema } from '@/shared/model/schemas/schemas'
import { Modal } from '@/shared/ui/modal'
import { DataPost } from '@/views/publicPageModal/DataArray'
import { UpdatePostModal } from '@/views/publicPageModal/ui/updatePostModal/UpdatePostModal'
import { zodResolver } from '@hookform/resolvers/zod'
import { CopyIcon } from '@radix-ui/react-icons'

import s from './commentsHeader.module.scss'

import DropdownMenuDemo from '../../dropdownMenu/DropdownMenu'
import { ModalCloseDeleteUnfollowPost } from '../../modal/modalCreateOrDeletePost'
import { ProfileData } from '../profileData'

type CommentsHeaderProps = {
  onClose: () => void
  postUserId?: number
  profileData?: DataPost
}
export const CommentsHeader: React.FC<CommentsHeaderProps> = ({
  onClose,
  postUserId,
  profileData,
}) => {
  const isAuth = useSelector(selectAuthState)
  const [isFollow, setIsFollow] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isOpenEditModal, setIsOpenEditModal] = useState(false)
  const { data: userData } = useGetMeQuery()
  const myId = userData?.userId
  const currentUrl = window.location.href
  const methods = useForm<PostFormData>({
    defaultValues: { description: '' },
    resolver: zodResolver(maximumCharactersSchema),
  })

  const handleDeletePost = () => {
    setIsOpenModal(false)
  }

  return (
    <div className={s.commentsHeader}>
      <ProfileData imageUrl={profileData?.imgProfile} profileUrl={profileData?.urlProfile} />
      {!isAuth &&
        (myId === postUserId ? (
          <DropdownMenuDemo
            content={[
              {
                icon: <PensilIcon />,
                label: 'Edit Post',
                onSelect: () => setIsOpenEditModal(true),
              },
              {
                icon: <TrashIcon />,
                label: 'Delete Post',
                onSelect: () => setIsOpenModal(true),
              },
            ]}
          />
        ) : (
          <DropdownMenuDemo
            content={[
              {
                icon: isFollow ? <UnfollowIcon /> : <FollowIcon />,
                label: isFollow ? 'Unfollow' : 'Follow',
                onSelect: () => {
                  if (isFollow) {
                    setIsFollow(false)
                  } else {
                    setIsFollow(true)
                  }
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
          />
        ))}
      {isOpenModal && (
        <ModalCloseDeleteUnfollowPost
          isOpenModal={isOpenModal}
          onCloseModal={() => setIsOpenModal(false)}
          onCloseParentModal={onClose}
          onDelete={handleDeletePost}
          variant={'deletePost'}
        />
      )}
      {isOpenEditModal && (
        <Modal
          className={s.editModal}
          isOpen={isOpenEditModal}
          onClose={() => setIsOpenEditModal(false)}
          title={'Edit Post'}
        >
          <UpdatePostModal setIsOpenEditModal={setIsOpenEditModal} />
        </Modal>
      )}
    </div>
  )
}
