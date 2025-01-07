import React, { useState } from 'react'

import { useGetPostsIdQuery } from '@/app/api/posts/postsApi'
import Close from '@/shared/assets/icons/Close'

import s from './publicPageModal.module.scss'

import { DataArray, PostType } from './DataArray'
import { ModalComments } from './modalComments'
import { ModalSlider } from './modalSlider'

export type PublicPageModalProps = {
  isOpen?: boolean
  onClose?: () => void
  post1?: PostType
}

export const PublicPageModal = ({ isOpen = true, onClose, post1 }: PublicPageModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { data, isError, isLoading } = useGetPostsIdQuery(3)

  if (!isOpen) {
    return null
  }

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget && isOpen) {
      onClose?.()
    }
  }

  const nextImage = () => {
    const photosLength = data?.photos?.length || 0

    setCurrentImageIndex(prevIndex => (prevIndex + 1) % photosLength)
  }

  const prevImage = () => {
    const photosLength = data?.photos?.length || 0

    setCurrentImageIndex(prevIndex => (prevIndex - 1 + photosLength) % photosLength)
  }

  return (
    <div className={s.backdrop} onClick={handleBackdropClick}>
      <div className={s.publicPageModule}>
        <button onClick={onClose} type={'button'}>
          <Close className={s.close}></Close>
        </button>
        <ModalSlider
          currentImageIndex={currentImageIndex}
          nextImage={nextImage}
          post={data}
          prevImage={prevImage}
          setCurrentIndex={setCurrentImageIndex}
        />
        <ModalComments post={data} />
      </div>
    </div>
  )
}
