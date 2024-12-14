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
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!isOpen) {
    return null
  }

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose?.()
    }
  }

  const nextPost = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % posts.length)
  }

  const prevPost = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + posts.length) % posts.length)
  }

  return (
    <div className={s.backdrop} onClick={handleBackdropClick}>
      <div className={s.publicPageModule}>
        <button onClick={onClose} type={'button'}>
          <Close className={s.close}></Close>
        </button>
        <ModalSlider
          currentIndex={currentIndex}
          nextPost={nextPost}
          posts={posts}
          prevPost={prevPost}
          setCurrentIndex={setCurrentIndex}
        />
        <ModalComments posts={posts[currentIndex]} />
      </div>
    </div>
  )
}
