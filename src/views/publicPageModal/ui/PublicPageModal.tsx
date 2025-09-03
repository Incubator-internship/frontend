'use client'

import { useGetPostsIdQuery } from '@/app/api/posts/postsApi'
import Close from '@/shared/assets/icons/Close'
import { skipToken } from '@reduxjs/toolkit/query'

import s from './publicPageModal.module.scss'

import { Carousel } from '../../../shared/ui/carousel'
import { ModalComments } from '../../../shared/ui/modalComments'
import { PublicPageModalServer } from './PublicPageModalServer'

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

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error loading post data.</div>
  }

  if (!data || !data.photos) {
    return
  }

  return <PublicPageModalServer photos={data.photos} postData={data} onClose={onClose} />
}
