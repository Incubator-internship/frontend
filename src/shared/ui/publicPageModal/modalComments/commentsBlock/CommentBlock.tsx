import { Scroll } from '@/shared/ui/scroll'

import s from './commentBlock.module.scss'

import { CommentsArray } from '../../DataArray'
import { CommentContainer } from './commentContainer/CommentContainer'

type CommentBlockProps = {
  comments: CommentsArray[]
}

export const CommentBlock = ({ comments }: CommentBlockProps) => {
  return (
    <Scroll height={'421px'} orientation={'vertical'} width={'100%'}>
      <div className={s.commentBlock}>
        {comments.map(comment => (
          <CommentContainer
            answers={comment.answers}
            datePost={comment.dateComment}
            key={comment.id}
            text={comment.comment}
          />
        ))}
      </div>
    </Scroll>
  )
}
