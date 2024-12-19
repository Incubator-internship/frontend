import s from './commentsHeader.module.scss'

import { DataPost } from '../../DataArray'
import { ProfileData } from '../profileData'

type CommentsHeaderProps = {
  profileData?: DataPost
}
export const CommentsHeader: React.FC<CommentsHeaderProps> = ({ profileData }) => {
  return (
    <div className={s.commentsHeader}>
      <ProfileData imageUrl={profileData?.imgProfile} profileUrl={profileData?.urlProfile} />
    </div>
  )
}
