'use client'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'

import { FileWithPreview } from '@/features/addPost/ui/createPost/CreatePost'
import { Alert } from '@/shared/ui/alerts'
import { Button } from '@/shared/ui/button'
import { Modal } from '@/shared/ui/modal'

import s from './avatarUploadModal.module.scss'

import { AddPhotoMainModal } from '../addPost/ui/addPhotoMainModal/addPhotoMainModal'
import { CroppAvatar } from './CroppAvatar'
import { getCroppedImg } from './utils/getCroppedImg'

type Props = {
  isOpen: boolean
  isOpenCroppModal: boolean
  isOpenUploadModal: boolean
  onClose: () => void
  onSave: (avatar: FileWithPreview) => void
  setIsOpenCroppModal: Dispatch<SetStateAction<boolean>>
  setIsOpenUploadModal: Dispatch<SetStateAction<boolean>>
}

export const AvatarUploadModal = ({
  isOpen,
  isOpenCroppModal,
  isOpenUploadModal,
  onClose,
  onSave,
  setIsOpenCroppModal,
  setIsOpenUploadModal,
}: Props) => {
  const [imageWithPreview, setImageWithPreview] = useState<FileWithPreview[]>([])
  const [textErrorModal, setTextErrorModal] = useState<string>('')
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<{
    height: number
    width: number
    x: number
    y: number
  } | null>(null)

  useEffect(() => {
    if (!isOpen || (!isOpenCroppModal && !isOpenUploadModal)) {
      setImageWithPreview([])
      setTextErrorModal('')
    }
  }, [isOpen, isOpenCroppModal, isOpenUploadModal])

  useEffect(() => {
    if (imageWithPreview.length) {
      setIsOpenUploadModal(false)
      setIsOpenCroppModal(true)
    } else if (isOpenCroppModal) {
      setIsOpenUploadModal(true)
      setIsOpenCroppModal(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageWithPreview.length, isOpenCroppModal])

  const handleSave = async () => {
    if (croppedAreaPixels && imageWithPreview.length > 0) {
      try {
        const croppedBlob = await getCroppedImg(imageWithPreview[0].preview, croppedAreaPixels)
        const croppedFile = new File([croppedBlob], imageWithPreview[0].name, {
          type: croppedBlob.type,
        })

        const fileWithPreview: FileWithPreview = Object.assign(croppedFile, {
          id: imageWithPreview[0].id,
          preview: URL.createObjectURL(croppedFile),
        })

        onSave(fileWithPreview)
      } catch (error) {
        console.error(error)
      }
    }
  }

  return (
    <div>
      {isOpenUploadModal && (
        <Modal isOpen={isOpen} onClose={onClose} title={'Add a Profile Photo'}>
          <div className={s.container}>
            {textErrorModal && <Alert className={s.alert} title={textErrorModal} type={'error'} />}
            <AddPhotoMainModal
              images={imageWithPreview}
              setImages={setImageWithPreview}
              setTextErrorModal={setTextErrorModal}
            />
          </div>
        </Modal>
      )}

      {isOpenCroppModal && imageWithPreview.length > 0 && (
        <Modal isOpen={isOpen} onClose={onClose} title={'Add a Profile Photo'}>
          <div>
            <div className={s.croppWrapper}>
              <CroppAvatar
                image={imageWithPreview[0].preview}
                setCroppedAreaPixels={setCroppedAreaPixels}
              />
            </div>
            <div className={s.save}>
              <Button onClick={handleSave}>Save</Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}
