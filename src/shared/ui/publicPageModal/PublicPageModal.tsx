import React, { useState } from 'react'

import Close from '@/shared/assets/icons/Close'

import s from './publicPageModal.module.scss'

import { DataArray } from './DataArray'
import { ModalComments } from './modalComments'
import { ModalSlider } from './modalSlider'

export type PublicPageModalProps = {
  children?: React.ReactNode
  isOpen?: boolean
  onClose?: () => void
}

export const PublicPageModal = ({ children, isOpen = true, onClose }: PublicPageModalProps) => {
  const posts = DataArray
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
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % posts[0].imagePost.length)
  }

  const prevImage = () => {
    setCurrentImageIndex(
      prevIndex => (prevIndex - 1 + posts[0].imagePost.length) % posts[0].imagePost.length
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
          posts={posts[0]}
          prevImage={prevImage}
          setCurrentIndex={setCurrentImageIndex}
        />
        <ModalComments posts={posts[0]} />
      </div>
    </div>
  )
}
