import { ComponentPropsWithoutRef } from 'react'

import { ProfilePhoto } from '@/features/profilePhoto'
import { clsx } from 'clsx'

import s from './accountInformation.module.scss'

type Props = {} & ComponentPropsWithoutRef<'div'>

export const AccountInformation = ({ className, ...rest }: Props) => {
  return (
    <div className={clsx(s.profileInformation, className)}>
      <div className={s.profileInformationAvatar}>
        <ProfilePhoto />
      </div>
      <div className={s.profileInformationForm}>
        Profile form. Here will be a form for filling out a profile
      </div>
    </div>
  )
}
