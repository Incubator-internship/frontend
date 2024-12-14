import React, { useState } from 'react'

import s from './publicPageModal.module.scss'

import { DataArray, PostType } from './DataArray'
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
    <div className={s.publicPageModule} onClick={handleBackdropClick}>
      <div className={s.publicPageModule}>
        <ModalSlider
          images={[posts[currentIndex].imagePost]}
          nextPost={nextPost}
          prevPost={prevPost}
        />
        <ModalComments data={posts[currentIndex]} />
      </div>
    </div>
  )
}
