'use client'

import { useSelector } from 'react-redux'

import { useGetMeQuery } from '@/app/api/auth/authApi'
import { selectAuthState } from '@/app/config/store/authSlice'
import { renderDropDownMenu } from '@/shared/ui/modalComments/commentsHeader/renderDropDownMenu'
import { DataPost } from '@/views/publicPageModal/DataArray'

import s from './commentsHeader.module.scss'

import { ProfileData } from '../profileData'

type CommentsHeaderProps = {
  postUserId?: number
  profileData?: DataPost
}
export const CommentsHeader: React.FC<CommentsHeaderProps> = ({ postUserId, profileData }) => {
  const isAuth = useSelector(selectAuthState)
  const isFollow = false
  const { data: userData } = useGetMeQuery()
  const myId = userData?.userId

  return (
    <div className={s.commentsHeader}>
      <ProfileData imageUrl={profileData?.imgProfile} profileUrl={profileData?.urlProfile} />
      {isAuth && renderDropDownMenu(myId, isFollow, postUserId)}
    </div>
  )
}
