'use client'

import { useSelector } from 'react-redux'

import { selectAuthState } from '@/app/config/store/authSlice'
import { LikesPost } from '@/views/publicPageModal/DataArray'

import s from './commentsFooter.module.scss'

import AddCommentBlock from '../../addCommentBlock/AddCommentBlock'
import { DatePost } from '../datePost'
type CommentsFooterProps = {
  datePost?: string
  likesCount: number
  likesPost: LikesPost[]
}

export const CommentsFooter = ({ datePost, likesCount, likesPost }: CommentsFooterProps) => {
  const lastThreeLikes = likesPost.slice(-3)
  const isAuth = useSelector(selectAuthState)

  return (
    <div className={s.commentsFooter}>
      <>
        <div className={s.likes}>
          <div className={s.likesImagesContainer}>
            {lastThreeLikes.map((like, index) => (
              <img alt={'img'} className={s.likesImage} key={index} src={like.imgProfile} />
            ))}
          </div>
          <div className={s.likesCount}>
            {likesCount ? likesCount : 0}
            <div className={s.likesCountText}>&quot;Like&quot;</div>
          </div>
        </div>
        <DatePost datePost={datePost} />
      </>
      {isAuth && <AddCommentBlock />}
    </div>
  )
}
