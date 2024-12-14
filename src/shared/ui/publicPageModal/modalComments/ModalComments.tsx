import s from './modalComments.module.scss'

import { PostType } from '../DataArray'
import { CommentBlock } from './commentsBlock'
import { CommentsFooter } from './commentsFooter'
import { CommentsHeader } from './commentsHeader'

type ModalCommentsProps = {
  data: PostType
}

export const ModalComments = ({ data }: ModalCommentsProps) => {
  return (
    <div className={s.modalComments}>
      <CommentsHeader profileData={data.dataPost} />
      <CommentBlock comments={data.comments} />
      <CommentsFooter datePost={data.datePost} likesCount={data.likesCount} />
    </div>
  )
}
