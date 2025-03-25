import React, { useState } from 'react'

import ImageIcon from '@/shared/assets/icons/ImageIcon'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar'
import { Button } from '@/shared/ui/button'

import s from './profilePhoto.module.scss'

import { FileWithPreview } from '../addPost/ui/createPost/CreatePost'
import { AvatarUploadModal } from '../addProfilePhoto/AvatarUploadModal'

export const ProfilePhoto = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [avatar, setAvatar] = useState<FileWithPreview | null>(null)
  const [isOpenCroppModal, setIsOpenCroppModal] = useState(false)
  const [isOpenUploadModal, setIsOpenUploadModal] = useState(true)

  const handleSaveAvatar = (Avatar: FileWithPreview) => {
    setAvatar(Avatar)
    setIsModalOpen(false)
  }

  return (
    <div className={s.container}>
      <div className={s.avatarWrapper}>
        {avatar ? (
          <>
            <Avatar className={s.ava}>
              <AvatarImage alt={'Profile avatar'} src={avatar.preview} />
              <AvatarFallback>
                <ImageIcon />
              </AvatarFallback>
            </Avatar>
            <div className={s.closeButton} onClick={() => setAvatar(null)}>
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
