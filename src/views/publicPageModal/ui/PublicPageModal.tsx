'use client'

import { useGetPostsIdQuery } from '@/app/api/posts/postsApi'
import Close from '@/shared/assets/icons/Close'
import { skipToken } from '@reduxjs/toolkit/query'

import s from './publicPageModal.module.scss'

import { Carousel } from '../../../shared/ui/carousel'
import { ModalComments } from '../../../shared/ui/modalComments'

export type PublicPageModalProps = {
  isOpen?: boolean
  onClose: () => void
  postId: null | number
}

export const PublicPageModal = ({ isOpen = true, onClose, postId }: PublicPageModalProps) => {
  const { data, isError, isLoading } = useGetPostsIdQuery(postId !== null ? postId : skipToken)

  if (!isOpen) {
    return null
  }

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose?.()
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error loading post data.</div>
  }

  if (!data || !data.photos) {
    return <div>No data</div>
  }

  return (
    <div className={s.backdrop} onClick={handleBackdropClick}>
      <div className={s.publicPageModule} onClick={e => e.stopPropagation()}>
        <button onClick={onClose} type={'button'}>
          <Close className={s.close}></Close>
        </button>
        <Carousel photos={data.photos} />
        <ModalComments onClose={onClose} post={data} />
      </div>
    </div>
  )
}
