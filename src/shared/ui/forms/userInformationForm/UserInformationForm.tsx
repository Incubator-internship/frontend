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
import { SelectController } from '@/shared/ui/selectController'
import { TextareaWithControl } from '@/shared/ui/textareaControl'
import { zodResolver } from '@hookform/resolvers/zod'
import { SerializedError } from '@reduxjs/toolkit'
import { format } from 'date-fns'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { z } from 'zod'

import s from './userInformationForm.module.scss'

const createUserInformationFormSchema = (t: (key: string) => string) =>
  z.object({
    aboutMe: createAboutMeSchema(t),
    dateOfBirth: createDateOfBirthSchema(t),
    firstName: createFirstNameSchema(t),
    lastName: createLastNameSchema(t),
    username: createUsernameSchema(t),
    country: z.string(),
    city: z.string(),
  })

export type UserInformationFormValues = z.infer<ReturnType<typeof createUserInformationFormSchema>>

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
}

export const UserInformationForm = ({ onSubmit }: Props) => {
  const router = useRouter()
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
      aboutMe: '',
      dateOfBirth: '',
      firstName: '',
      lastName: '',
      username: '',
      country: '',
      city: '',
    },
    mode: 'onBlur',
    resolver: zodResolver(UserInformationFormSchema),
  })

  const onSubmitForm = handleSubmit(async data => {
    const result = await onSubmit({
      aboutMe: data.aboutMe,
      dateOfBirth: data.dateOfBirth,
      firstName: data.firstName,
      lastName: data.lastName,
      username: data.username,
      country: data.country,
      city: data.city,
    })

    //   if (result?.error) {
    //     if ('status' in result.error) {
    //       if (result.error.status === 400) {
    //         const errorMessage = result.error.data?.errorsMessages?.[0] || ''
    //
    //         if (errorMessage.includes('userName')) {
    //           setError('username', {
    //             message: t('ErrorUsername'),
    //             type: 'manual',
    //           })
    //         } else if (errorMessage.includes('email')) {
    //           setError('email', {
    //             message: t('ErrorEmail'),
    //             type: 'manual',
    //           })
    //         }
    //       }
    //     }
    //   } else {
    //     reset()
    //   }
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
      <DatePickerControl name={'dateOfBirth'} control={control} label={t('DateOfBirthInput')} />
      {/*<SelectController*/}
      {/*  items={[*/}
      {/*    { title: 'country1', value: 'country1' },*/}
      {/*    { title: 'country2', value: 'country2' },*/}
      {/*  ]}*/}
      {/*  name={'country'}*/}
      {/*  control={control}*/}
      {/*  variant={'wide'}*/}
      {/*  label={t('CountrySelect')}*/}
      {/*/>*/}
      {/*<SelectController*/}
      {/*  items={[*/}
      {/*    { title: 'city1', value: 'city1' },*/}
      {/*    { title: 'city2', value: 'city2' },*/}
      {/*  ]}*/}
      {/*  name={'city'}*/}
      {/*  variant={'wide'}*/}
      {/*  control={control}*/}
      {/*  label={t('CitySelect')}*/}
      {/*/>*/}
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
