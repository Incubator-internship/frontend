import { useState } from 'react'

import Line from '@/shared/assets/icons/Line'

import s from './commentContainer.module.scss'

import { CommentsArray } from '../../../DataArray'
import { DatePost } from '../../datePost'
import { ProfileData } from '../../profileData'
import { AnswerContainer } from './answerContainer/AnswerContainer'
import { Comment } from './comment/Comment'

type CommentContainerProps = {
  answers: string[]
  datePost: string
  text: string
}

export const CommentContainer = ({ answers, datePost, text }: CommentContainerProps) => {
  const [showAnswers, setShowAnswers] = useState(false)

  const toggleAnswers = () => {
    setShowAnswers(!showAnswers)
  }

  return (
    <div>
      <div className={s.commentContainer}>
        <ProfileData className={s.profileDataComment} />
        <Comment text={text} />
      </div>
      <DatePost datePost={datePost} />
      {answers.length > 0 && (
        <button onClick={toggleAnswers} type={'button'}>
          {!showAnswers && (
            <span>
              <Line />
              <span className={s.viewAnswer}>View Answers ({answers.length})</span>
            </span>
          )}
        </button>
      )}
      {showAnswers && <AnswerContainer answers={answers} datePost={datePost} />}
    </div>
  )
}
