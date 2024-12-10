import s from './commentBlock.module.scss'

import { CommentContainer } from './commentContainer/CommentContainer'

export const CommentBlock = () => {
  return (
    <div className={s.commentBlock}>
      <CommentContainer />
      <CommentContainer />
      <CommentContainer />
    </div>
  )
}
