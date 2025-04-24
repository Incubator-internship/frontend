import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import {
  createAboutMeSchema,
  createDateOfBirthSchema,
  createFirstNameSchema,
  createLastNameSchema,
  createUsernameSchema,
} from '@/shared/model/schemas/schemas'
import { Button } from '@/shared/ui/button'
import { DatePickerControl } from '@/shared/ui/datePickerControl'
import { InputControl } from '@/shared/ui/inputControl'
import { TextareaWithControl } from '@/shared/ui/textareaControl'
import { zodResolver } from '@hookform/resolvers/zod'
import { SerializedError } from '@reduxjs/toolkit'
import { parse } from 'date-fns'
import { useTranslations } from 'next-intl'
import { z } from 'zod'

import s from './userInformationForm.module.scss'

import SelectCountryCity from '../../selectCountryCity/SelectCountryCity'

const createUserInformationFormSchema = (t: (key: string) => string) =>
  z.object({
    aboutMe: createAboutMeSchema(t),
    city: z.string(),
    country: z.string(),
    dateOfBirth: createDateOfBirthSchema(t),
    firstName: createFirstNameSchema(t),
    lastName: createLastNameSchema(t),
    username: createUsernameSchema(t),
  })

export type UserInformationFormValues = Omit<
  z.infer<ReturnType<typeof createUserInformationFormSchema>>,
  'dateOfBirth'
> & {
  dateOfBirth?: Date
}

type FetchBaseQueryErrorWithDetails = {
  data?: {
    errorsMessages?: string[]
  }
  status: number
}

export type UserInformationResponse =
  | { data: void; error?: undefined }
  | { data?: undefined; error: FetchBaseQueryErrorWithDetails | SerializedError }

type Props = {
  onSubmit: (data: UserInformationFormValues) => Promise<UserInformationResponse> | void
  userInformation?: {
    aboutMe: string | undefined
    city: string | undefined
    country: string | undefined
    dateOfBirth: string | undefined
    firstName: string | undefined
    lastName: string | undefined
    username: string | undefined
  }
}

export const UserInformationForm = ({ onSubmit, userInformation }: Props) => {
  const t = useTranslations('ProfileSettingsPage')
  const tErrors = useTranslations('FormsErrors')

  const UserInformationFormSchema = createUserInformationFormSchema(tErrors)

  const {
    control,
    formState: { errors, isDirty, isValid },
    handleSubmit,
    reset,
    setError,
  } = useForm<UserInformationFormValues>({
    defaultValues: {
      aboutMe: userInformation?.aboutMe,
      city: userInformation?.city,
      country: userInformation?.country,
      dateOfBirth: userInformation?.dateOfBirth
        ? parse(userInformation.dateOfBirth, 'dd.MM.yyyy', new Date())
        : undefined,
      firstName: userInformation?.firstName,
      lastName: userInformation?.lastName,
      username: userInformation?.username,
    },
    mode: 'onBlur',
    resolver: zodResolver(UserInformationFormSchema),
  })

  const onSubmitForm = handleSubmit(async data => {
    const result = await onSubmit({
      aboutMe: data.aboutMe,
      city: data.city,
      country: data.country,
      dateOfBirth: data.dateOfBirth,
      firstName: data.firstName,
      lastName: data.lastName,
      username: data.username,
    })

    if (result?.error) {
      if ('status' in result.error) {
        if (result.error.status === 400) {
          const errorMessage = result.error.data?.errorsMessages?.[0] || ''

          if (errorMessage.includes('userName')) {
            setError('username', {
              message: t('ErrorUsername'),
              type: 'manual',
            })
          } else if (errorMessage.includes('age')) {
            setError('dateOfBirth', {
              message: t('ErrorDateOfBirth'),
              type: 'manual',
            })
          }
        }
      }
    } else {
      reset()
    }
  })

  return (
    <form className={s.form} onSubmit={onSubmitForm}>
      <InputControl
        className={s.input}
        control={control}
        label={t('UsernameInput')}
        name={'username'}
      />
      <InputControl
        className={s.input}
        control={control}
        label={t('FirstNameInput')}
        name={'firstName'}
      />
      <InputControl
        className={s.input}
        control={control}
        label={t('LastNameInput')}
        name={'lastName'}
      />
      <DatePickerControl control={control} label={t('DateOfBirthInput')} name={'dateOfBirth'} />

      <SelectCountryCity cityName={'city'} control={control} countryName={'country'} />

      <TextareaWithControl
        className={s.input}
        control={control}
        label={t('AboutMeInput')}
        name={'aboutMe'}
      />
      <Button className={s.button} disabled={!isDirty || !isValid} type={'submit'}>
        {t('UserInformationFormBtn')}
      </Button>
    </form>
  )
}
