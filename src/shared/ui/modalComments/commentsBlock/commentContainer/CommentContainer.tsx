'use client'

import { useState } from 'react'

import Line from '@/shared/assets/icons/Line'
import { Answers, DataPost } from '@/views/publicPageModal/DataArray'

import s from './commentContainer.module.scss'

import { DatePost } from '../../datePost'
import { ProfileData } from '../../profileData'
import { AnswerContainer } from './answerContainer/AnswerContainer'
import { Comment } from './comment/Comment'

type CommentContainerProps = {
  answers: Answers[]
  dataPost: DataPost
  datePost: string
  text: string
}

export const CommentContainer = ({ answers, dataPost, datePost, text }: CommentContainerProps) => {
  const [showAnswers, setShowAnswers] = useState(false)

  const toggleAnswers = () => {
    setShowAnswers(!showAnswers)
  }

  return (
    <div>
      <div className={s.commentContainer}>
        <ProfileData
          className={s.profileDataComment}
          imageUrl={dataPost.imgProfile}
          profileUrl={dataPost.urlProfile}
        />
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
      {showAnswers && <AnswerContainer answers={answers} />}
    </div>
  )
}
