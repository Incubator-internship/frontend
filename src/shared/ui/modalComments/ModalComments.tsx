'use client'
import { useSelector } from 'react-redux'

import { PostsDataByPostId } from '@/app/api/posts/postsApi.types'
import { DataArray } from '@/views/publicPageModal/DataArray'

import s from './modalComments.module.scss'

import { CommentBlock } from './commentsBlock'
import { CommentsFooter } from './commentsFooter'
import { CommentsHeader } from './commentsHeader'

type ModalCommentsProps = {
  onClose: () => void
  post?: PostsDataByPostId
}

export const ModalComments = ({ onClose, post }: ModalCommentsProps) => {
  const post2 = DataArray

  return (
    <div className={s.modalComments}>
      <CommentsHeader onClose={onClose} postUserId={post?.userId} profileData={post2.dataPost} />
      <CommentBlock comments={post2.comments} contentData={post} />
      <CommentsFooter
        datePost={post?.createdAt}
        likesCount={post2.likesPost.length}
        likesPost={post2.likesPost}
      />
    </div>
  )
}
