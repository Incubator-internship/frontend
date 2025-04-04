import { ComponentPropsWithoutRef } from 'react'

import { useGetMeQuery } from '@/app/api/auth/authApi'
import { useEditProfileMutation, useGetProfileQuery } from '@/app/api/users/usersApi'
import { ProfilePhoto } from '@/features/profilePhoto'
import {
  createAboutMeSchema,
  createDateOfBirthSchema,
  createFirstNameSchema,
  createLastNameSchema,
  createUsernameSchema,
} from '@/shared/model/schemas/schemas'
import {
  UserInformationForm,
  UserInformationFormValues,
  UserInformationResponse,
} from '@/shared/ui/forms/userInformationForm'
import { clsx } from 'clsx'
import { z } from 'zod'

import s from './accountInformation.module.scss'

type Props = {} & ComponentPropsWithoutRef<'div'>

export const AccountInformation = ({ className, ...rest }: Props) => {
  const { data: me } = useGetMeQuery()
  const [editProfile] = useEditProfileMutation()
  const { data: userInformation } = useGetProfileQuery(me?.userId!, {
    skip: !me?.userId,
  })
  const onSubmit = async (data: UserInformationFormValues) => {
    const result = await editProfile({
      body: {
        aboutMe: data.aboutMe ?? '',
        city: data.city,
        country: data.country,
        dateOfBirthday: data.dateOfBirth,
        firstName: data.firstName ?? '',
        lastName: data.lastName ?? '',
        userName: data.username ?? '',
      },
      id: me?.userId ?? 0,
    })

    return result as UserInformationResponse
  }

  if (!me || !userInformation) {
    return <div>Loading...</div>
  }

  return (
    <div className={clsx(s.profileInformation, className)}>
      <div className={s.profileInformationAvatar}>
        <ProfilePhoto />
      </div>
      <div className={s.profileInformationForm}>
        <UserInformationForm
          onSubmit={onSubmit}
          userInformation={{
            aboutMe: userInformation?.aboutMe,
            city: userInformation?.city,
            country: userInformation?.country,
            dateOfBirth: userInformation?.dateOfBirthday,
            firstName: userInformation?.firstName,
            lastName: userInformation?.lastName,
            username: me?.login,
          }}
        />
      </div>
    </div>
  )
}
