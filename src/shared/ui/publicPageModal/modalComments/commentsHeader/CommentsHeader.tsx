import s from './commentsHeader.module.scss'

import { ProfileData } from '../profileData'
export const CommentsHeader = () => {
  return (
    <div className={s.commentsHeader}>
      <ProfileData />
    </div>
  )
}
