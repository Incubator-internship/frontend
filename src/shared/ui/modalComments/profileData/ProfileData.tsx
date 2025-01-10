'use client'

import React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar/Avatar'

import s from './profileData.module.scss'

type ProfileDataProps = {
  className?: string
  imageUrl: string
  profileUrl: string
}
export const ProfileData: React.FC<ProfileDataProps> = ({ className, imageUrl, profileUrl }) => {
  return (
    <span className={className || s.profileData}>
      <Avatar>
        <AvatarImage alt={'ProfileImg'} className={s.img} src={imageUrl || ''} />
        <AvatarFallback>A1</AvatarFallback>
      </Avatar>
      <div className={s.urlProfile}>{profileUrl}</div>
    </span>
  )
}
