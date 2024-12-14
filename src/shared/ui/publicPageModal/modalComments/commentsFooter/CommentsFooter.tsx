import s from './commentsFooter.module.scss'

import { DatePost } from '../datePost'
type CommentsFooterProps = {
  datePost: string
  likesCount?: number
  likesPost?: []
}

export const CommentsFooter = ({ datePost, likesCount, likesPost }: CommentsFooterProps) => {
  return (
    <div className={s.commentsFooter}>
      <div className={s.likes}>
        <div>3ICONS</div>
        <div>{likesCount} Likes</div>
      </div>
      <DatePost datePost={datePost} />
    </div>
  )
}
