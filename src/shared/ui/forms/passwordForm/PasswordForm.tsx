import React from 'react'
import { useForm } from 'react-hook-form'

import { useNewPasswordMutation } from '@/app/api/auth/authApi'
import {
  createAgreeSchema,
  createEmailSchema,
  createPasswordSchema,
  createUsernameSchema,
  passwordSchema,
} from '@/shared/model/schemas/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter, useSearchParams } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { z } from 'zod'

import s from './passwordForm.module.scss'

import { Button } from '../../button'
import { Card } from '../../card'
import { Typography } from '../../typography'
import { PasswordFormItem } from './passwordFormItem'
import { ApiError } from './types'

const createPasswordFormSchema = (t: (key: string) => string) =>
  z
    .object({
      newPassword: createPasswordSchema(t),
      passwordConfirmation: createPasswordSchema(t),
      recoveryCode: z.string(),
    })
    .refine(data => data.newPassword === data.passwordConfirmation, {
      message: t('PasswordMatch'),
      path: ['passwordConfirmation'],
    })

export type FormValues = z.infer<ReturnType<typeof createPasswordFormSchema>>

export const PasswordForm = () => {
  const router = useRouter()
  const locale = useLocale()
  const [newPasswordMutation] = useNewPasswordMutation()
  const t = useTranslations('NewPasswordPage')
  const tErrors = useTranslations('FormsErrors')

  const passwordFormSchema = createPasswordFormSchema(tErrors)

  const searchParams = useSearchParams()
  const recoveryCode = searchParams ? searchParams.get('code') : null

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
      router.push(`/${locale}/signup`)
    } catch (error: unknown) {
      if (isApiError(error)) {
        if (error.status === 400) {
          setError('recoveryCode', { message: t('ErrorRecoveryCode') })
          router.push(`/${locale}/forgotpassword`)
        } else if (error.status === 429) {
          setError('root', {
            message: t('Error429'),
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
