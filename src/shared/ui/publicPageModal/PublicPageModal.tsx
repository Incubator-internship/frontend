import React from 'react'

import s from './publicPageModal.module.scss'

import { CommentsForPost } from './commentsForPost/CommentsForPost'
import { SliderForPost } from './sliderForPost'

export type ModalProps = {
  children?: React.ReactNode
  isOpen?: boolean
  onClose?: () => void
  title?: string
}

export const PublicPageModal = ({ children, isOpen = true, onClose, title }: ModalProps) => {
  if (!isOpen) {
    return null
  }

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose?.()
    }
  }

  return (
    <div className={s.backdrop} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <div className={s.publicPageModal}>
          <SliderForPost />
          <CommentsForPost />
          {/* <div className={s.body}>{children}</div> */}
        </div>
      </div>
    </div>
  )
}
