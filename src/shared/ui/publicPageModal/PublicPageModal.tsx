import React, { useState } from 'react'

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
  const post = DataArray
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!isOpen) {
    return null
  }

  // const handleKeyDown = (event: KeyboardEvent) => {
  //   if (event.key === 'Escape' && isOpen) {
  //     onClose?.()
  //   }
  // }
  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget && isOpen) {
      onClose?.()
    }
  }

  const nextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % post.imagePost.length)
  }

  const prevImage = () => {
    setCurrentImageIndex(
      prevIndex => (prevIndex - 1 + post.imagePost.length) % post.imagePost.length
    )
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
          post={post}
          prevImage={prevImage}
          setCurrentIndex={setCurrentImageIndex}
        />
        <ModalComments post={post} />
      </div>
    </div>
  )
}
