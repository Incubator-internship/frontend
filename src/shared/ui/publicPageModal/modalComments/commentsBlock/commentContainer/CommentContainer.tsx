import s from './commentContainer.module.scss'

import { DatePost } from '../../datePost'
import { ProfileData } from '../../profileData'
import { Comment } from './comment/Coment'

export const CommentContainer = () => {
  return (
    <div>
      <div className={s.commentContainer}>
        <ProfileData className={s.profileDataComment} />
        <Comment />
      </div>
      <DatePost />
    </div>
  )
}
