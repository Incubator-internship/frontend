'use client'

import { Answers } from '@/views/publicPageModal/DataArray'

import s from './answerContainer.module.scss'

import { DatePost } from '../../../datePost/DatePost'
import { ProfileData } from '../../../profileData/ProfileData'

type AnswerContainerProps = {
  answers: Answers[]
}
export const AnswerContainer = ({ answers }: AnswerContainerProps) => {
  return (
    <>
      {answers.map(answer => (
        <div className={s.answerContainer} key={answer.id}>
          <ProfileData
            className={s.profileDataComment}
            imageUrl={answer.dataPost.imgProfile}
            profileUrl={answer.dataPost.urlProfile}
          />
          <span>{answer.answer}</span>
          <DatePost datePost={answer.datePost} />
        </div>
      ))}
    </>
  )
}
