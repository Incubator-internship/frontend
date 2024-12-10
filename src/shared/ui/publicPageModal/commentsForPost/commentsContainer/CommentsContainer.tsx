import s from './commentsContainer.module.scss'

import { Comment } from './comment/Comment'

export const CommentsContainer = () => {
  return (
    <div>
      <div className={s.commentsContainer}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  )
}
