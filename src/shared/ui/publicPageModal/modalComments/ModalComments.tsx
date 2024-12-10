import s from './modalComments.module.scss'

import { CommentBlock } from './commentsBlock'
import { CommentsFooter } from './commentsFooter'
import { CommentsHeader } from './commentsHeader'
export const ModalComments = () => {
  return (
    <div className={s.modalComments}>
      <CommentsHeader />
      <CommentBlock />
      <CommentsFooter />
    </div>
  )
}
