import s from './commentsFooter.module.scss'

import { LikesPostType } from '../../DataArray'
import { DatePost } from '../datePost'
type CommentsFooterProps = {
  datePost: string
  likesCount: number
  likesPost: LikesPostType[]
}

export const CommentsFooter = ({ datePost, likesCount, likesPost }: CommentsFooterProps) => {
  const lastThreeLikes = likesPost.slice(-3)

  return (
    <div className={s.commentsFooter}>
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
    </div>
  )
}
