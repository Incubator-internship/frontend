import s from './modalComments.module.scss'

import { PostType } from '../DataArray'
import { CommentBlock } from './commentsBlock'
import { CommentsFooter } from './commentsFooter'
import { CommentsHeader } from './commentsHeader'

type ModalCommentsProps = {
  posts: PostType
}

export const ModalComments = ({ posts }: ModalCommentsProps) => {
  console.log(posts)

  return (
    <div className={s.modalComments}>
      <CommentsHeader profileData={posts.dataPost} />
      <CommentBlock comments={posts.comments} />
      <CommentsFooter
        datePost={posts.datePost}
        likesCount={posts.likesPost.length}
        likesPost={posts.likesPost}
      />
    </div>
  )
}
