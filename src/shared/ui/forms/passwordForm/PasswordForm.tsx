import React from 'react'
import { useForm } from 'react-hook-form'

import { useNewPasswordMutation } from '@/app/api/auth/authApi'
import { passwordSchema } from '@/shared/model/schemas/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter, useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { z } from 'zod'

import s from './passwordForm.module.scss'

import { Button } from '../../button'
import { Card } from '../../card'
import { Typography } from '../../typography'
import { PasswordFormItem } from './passwordFormItem'
import { ApiError } from './types'

const passwordFormSchema = z
  .object({
    newPassword: passwordSchema,
    passwordConfirmation: passwordSchema,
    recoveryCode: z.string(),
  })
  .refine(data => data.newPassword === data.passwordConfirmation, {
    message: 'The passwords must match',
    path: ['passwordConfirmation'],
  })

export type FormValues = z.infer<typeof passwordFormSchema>

export const PasswordForm = () => {
  const {
    control,
    formState: { errors, isDirty, isValid },
    handleSubmit,
    setError,
  } = useForm<FormValues>({
    defaultValues: {
      newPassword: '',
      passwordConfirmation: '',
      recoveryCode: '',
    },
    mode: 'onBlur',
    resolver: zodResolver(passwordFormSchema),
  })

  const router = useRouter()
  const [newPasswordMutation] = useNewPasswordMutation()
  const t = useTranslations('NewPasswordPage')
  const tError = useTranslations('Error')

  const searchParams = useSearchParams()
  const recoveryCode = searchParams ? searchParams.get('code') : null

  function isApiError(error: unknown): error is ApiError {
    return (
      typeof error === 'object' &&
      error !== null &&
      'status' in error &&
      typeof (error as ApiError).status === 'number'
    )
  }

  const onSubmitForm = handleSubmit(async data => {
    try {
      await newPasswordMutation({
        newPassword: data.newPassword,
        recoveryCode: recoveryCode || '',
      }).unwrap()
      router.push('/signin')
    } catch (error: unknown) {
      if (isApiError(error)) {
        if (error.status === 400) {
          setError('recoveryCode', { message: tError('ErrorRecoveryCode') })
          router.push('/forgotpassword')
        } else if (error.status === 429) {
          setError('root', {
            message: tError('Error429'),
          })
        }
      }
    }
  })

  return (
    <Card className={s.createNewPasswordForm}>
      <Typography className={s.createNewPasswordTitle} variant={'h2'}>
        {t('CreateNewPasswordTitle')}
      </Typography>
      <form onSubmit={onSubmitForm}>
        <PasswordFormItem control={control} errors={errors} />
        <Typography className={s.createNewPasswordHelper} color={'grey'} variant={'body2'}>
          {t('CreateNewPasswordHelper')}
        </Typography>
        <Button disabled={!isDirty || !isValid} fullWidth type={'submit'}>
          {t('CreateNewPasswordButton')}
        </Button>
      </form>
    </Card>
  )
}
