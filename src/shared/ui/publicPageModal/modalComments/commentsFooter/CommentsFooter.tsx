import s from './commentsFooter.module.scss'

import { DatePost } from '../datePost'

export const CommentsFooter = () => {
  return (
    <div className={s.commentsFooter}>
      <div className={s.likes}>
        <div>3ICONS</div>
        <div>Likes</div>
      </div>
      <DatePost />
    </div>
  )
}
