'use client'

import { PostsDataByPostId } from '@/app/api/posts/postsApi.types'
import { Scroll } from '@/shared/ui/scroll'

import s from './commentBlock.module.scss'

import { CommentsArray } from '../../../../views/publicPageModal/DataArray'
import { CommentContainer } from './commentContainer/CommentContainer'

type CommentBlockProps = {
  comments: CommentsArray[]
  contentData?: PostsDataByPostId
}

export const CommentBlock = ({ comments, contentData }: CommentBlockProps) => {
  return (
    <Scroll height={'351px'} orientation={'vertical'} width={'100%'}>
      <div className={s.commentBlock}>
        <CommentContainer
          content={contentData?.content}
          datePost={contentData?.createdAt}
          variant={'publisher'}
        />
        {comments.map(comment => (
          <CommentContainer
            answers={comment.answers}
            dataPost={comment.dataPost}
            datePost={comment.dateComment}
            key={comment.id}
            text={comment.comment}
            variant={'commentator'}
          />
        ))}
      </div>
    </Scroll>
  )
}
