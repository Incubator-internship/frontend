import s from './answerContainer.module.scss'

import { DatePost } from '../../../datePost/DatePost'
import { ProfileData } from '../../../profileData/ProfileData'

type AnswerContainerProps = {
  answers: string[]
  datePost: string
}
export const AnswerContainer = ({ answers, datePost }: AnswerContainerProps) => {
  return (
    <>
      {answers.map((answer, index) => (
        <div className={s.answerContainer} key={index}>
          <ProfileData className={s.profileDataComment} />
          <span>{answer}</span>
          <DatePost datePost={datePost} />
        </div>
      ))}
    </>
  )
}
