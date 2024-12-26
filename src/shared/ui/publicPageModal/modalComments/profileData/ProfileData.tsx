import React from 'react'

import s from './profileData.module.scss'

type ProfileDataProps = {
  className?: string
  imageUrl?: string
  profileUrl?: string
}
export const ProfileData: React.FC<ProfileDataProps> = ({ className, imageUrl, profileUrl }) => {
  return (
    <span className={className || s.profileData}>
      <img alt={'ProfileImg'} className={s.img} src={imageUrl || ''} />
      <div className={s.urlProfile}>{profileUrl}</div>
    </span>
  )
}
