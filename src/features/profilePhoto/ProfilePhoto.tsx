import React, { useState } from 'react'

import {
  useDeleteAvatarMutation,
  useGetProfileQuery,
  useUploadAvatarMutation,
} from '@/app/api/users/usersApi'
import ImageIcon from '@/shared/assets/icons/ImageIcon'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar'
import { Button } from '@/shared/ui/button'

import s from './profilePhoto.module.scss'

import { FileWithPreview } from '../addPost/ui/createPost/CreatePost'
import { convertPreviewToFile } from '../addPost/utils/photoUtils'
import { AvatarDeleteModal } from '../addProfilePhoto/AvatarDeleteModal'
import { AvatarUploadModal } from '../addProfilePhoto/AvatarUploadModal'

type Props = {
  userId: number
}

export const ProfilePhoto = ({ userId }: Props) => {
  const { data: profile, refetch: refetchProfile } = useGetProfileQuery(userId)
  const [uploadAvatar] = useUploadAvatarMutation()
  const [deleteAvatar] = useDeleteAvatarMutation()
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isOpenCroppModal, setIsOpenCroppModal] = useState<boolean>(false)
  const [isOpenUploadModal, setIsOpenUploadModal] = useState<boolean>(true)
  const [isAvatarDelete, setIsAvatarDelete] = useState<boolean>(false)

  const handleSaveAvatar = async (uploadAva: FileWithPreview) => {
    try {
      const file = await convertPreviewToFile(uploadAva)

      await uploadAvatar({ avatar: file }).unwrap()
      setIsModalOpen(false)
    } catch (e) {
      console.log(e)
    }
  }
  const handleConfirmDelete = async () => {
    try {
      await deleteAvatar({ id: userId }).unwrap()

      await refetchProfile()
      setIsAvatarDelete(false)
    } catch (err) {
      console.error('Delete avatar error:', err)
    } finally {
      setIsAvatarDelete(false)
    }
  }

  return (
    <div className={s.container}>
      <div className={s.avatarWrapper}>
        {profile?.originalAvatarUrl ? (
          <>
            <Avatar className={s.ava}>
              <AvatarImage alt={'Profile avatar'} src={profile.originalAvatarUrl} />
              <AvatarFallback>
                <ImageIcon />
              </AvatarFallback>
            </Avatar>
            <div className={s.closeButton} onClick={() => setIsAvatarDelete(el => !el)}>
              ✖
            </div>
          </>
        ) : (
          <Avatar className={s.ava}>
            <AvatarFallback>
              <ImageIcon />
            </AvatarFallback>
          </Avatar>
        )}
      </div>

      <Button onClick={() => setIsModalOpen(true)} type={'button'} variant={'transparent'}>
        Add a Profile Photo
      </Button>

      {isAvatarDelete && (
        <AvatarDeleteModal
          deleteAva={handleConfirmDelete}
          isOpen={isAvatarDelete}
          onClose={() => setIsAvatarDelete(false)}
        />
      )}

      {isModalOpen && (
        <AvatarUploadModal
          isOpen={isModalOpen}
          isOpenCroppModal={isOpenCroppModal}
          isOpenUploadModal={isOpenUploadModal}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveAvatar}
          setIsOpenCroppModal={setIsOpenCroppModal}
          setIsOpenUploadModal={setIsOpenUploadModal}
        />
      )}
    </div>
  )
}
