import React, { useState } from 'react'
// import Image from 'next/image'

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
import { AvatarLoader } from '@/shared/ui/loader/Loader'
import { useRouter } from 'next/navigation'

type Props = {
  userId: number
}

export const ProfilePhoto = ({ userId }: Props) => {
  const { data: profile, refetch: refetchProfile, isFetching: isProfileFetching } = useGetProfileQuery(userId)
  const [uploadAvatar, { isLoading: isUploading }] = useUploadAvatarMutation()
  const [deleteAvatar, { isLoading: isDeleting }] = useDeleteAvatarMutation()
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isOpenCroppModal, setIsOpenCroppModal] = useState<boolean>(false)
  const [isOpenUploadModal, setIsOpenUploadModal] = useState<boolean>(true)
  const [isAvatarDelete, setIsAvatarDelete] = useState<boolean>(false)
  const rouer = useRouter()
  const isAnyLoading = isUploading || isDeleting || isProfileFetching

  const handleSaveAvatar = async (uploadAva: FileWithPreview) => {
    try {
      const file = await convertPreviewToFile(uploadAva)
      await uploadAvatar({ avatar: file }).unwrap()
      await refetchProfile()
      setIsModalOpen(false)
    } catch (e) {
      console.error(e)
    }
  }

  const handleConfirmDelete = async () => {
    try {
      await deleteAvatar({ id: userId }).unwrap()
      await refetchProfile()
      rouer.refresh()
    } catch (err) {
      console.error(err)
    } finally {
      setIsAvatarDelete(false)
    }
  }

  return (
    <div className={s.container}>
      <div className={s.avatarWrapper}>
        {isAnyLoading ? (
          <div className={s.avaLoader}>
            <AvatarLoader />
          </div>
        ) : profile?.originalAvatarUrl ? (
          <>
            <Avatar size='large' className={s.ava}>
              <AvatarImage alt={'Profile avatar'} src={profile.originalAvatarUrl} />
              <AvatarFallback>
                <ImageIcon />
              </AvatarFallback>
            </Avatar>
            {/* <Image
              alt="Profile avatar"
              className={s.ava}
              width={204}
              height={204}
              src={profile.originalAvatarUrl}
              style={{ objectFit: 'cover' }}
            /> */}
            <div className={s.closeButton} onClick={() => setIsAvatarDelete(true)}>
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