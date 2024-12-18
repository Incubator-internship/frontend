import s from './modalComments.module.scss'

import { PostType } from '../DataArray'
import { CommentBlock } from './commentsBlock'
import { CommentsFooter } from './commentsFooter'
import { CommentsHeader } from './commentsHeader'

type ModalCommentsProps = {
  post: PostType
}

export const ModalComments = ({ post }: ModalCommentsProps) => {
  return (
    <div className={s.modalComments}>
      <CommentsHeader profileData={post.dataPost} />
      <CommentBlock comments={post.comments} />
      <CommentsFooter
        datePost={post.datePost}
        likesCount={post.likesPost.length}
        likesPost={post.likesPost}
      />
    </div>
  )
}
