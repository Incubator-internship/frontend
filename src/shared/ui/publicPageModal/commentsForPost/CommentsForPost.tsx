import s from './commentForPost.module.scss'

import { CommentsContainer } from './commentsContainer'
import { CommentsFooter } from './commentsFooter'
import { CommentsHeader } from './commentsHeader'
export const CommentsForPost = () => {
  return (
    <div className={s.commentForPost}>
      <CommentsHeader />
      <CommentsContainer />
      <CommentsFooter />
    </div>
  )
}
