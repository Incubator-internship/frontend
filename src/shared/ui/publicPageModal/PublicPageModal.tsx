import React, { useState } from 'react'

import { useGetPostsIdQuery } from '@/app/api/posts/postsApi'
import { PostsDataByPostId } from '@/app/api/posts/postsApi.types'
import Close from '@/shared/assets/icons/Close'

import s from './publicPageModal.module.scss'

import { Carousel } from '../carousel/Carousel'
import { ModalComments } from './modalComments'

export type PublicPageModalProps = {
  isOpen?: boolean
  onClose?: () => void
  post1?: PostsDataByPostId
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
        <Carousel
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
