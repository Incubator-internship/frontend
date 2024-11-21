import React from 'react'
import { useForm } from 'react-hook-form'

import { useNewPasswordMutation } from '@/app/api/inctagramApi'
import { passwordSchema } from '@/shared/model/schemas/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter, useSearchParams } from 'next/navigation'
import { z } from 'zod'

import s from './passwordForm.module.scss'

import { Button } from '../../button'
import { Card } from '../../card'
import { Typography } from '../../typography'
import { PasswordFormItem } from './passwordFormItem'

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
type PasswordFormProps = {
  onSubmit: (data: Omit<FormValues, 'passwordConfirmation'>) => void
}

export const PasswordForm = ({ onSubmit }: PasswordFormProps) => {
  const {
    control,
    formState: { isDirty, isValid },
    handleSubmit,
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
  const [newPasswordMutation, { error, isLoading }] = useNewPasswordMutation()

  const searchParams = useSearchParams()
  const recoveryCode = searchParams!.get('code') || ''

  const handleTransition = () => {
    router.push('/signin')
  }

  const onSubmitForm = handleSubmit(async data => {
    try {
      await newPasswordMutation({
        newPassword: data.newPassword,
        recoveryCode: recoveryCode,
      }).unwrap()
      handleTransition()
    } catch (error) {
      console.error('Error changing password:', error)
    }
  })

  return (
    <Card className={s.createNewPasswordForm}>
      <Typography className={s.createNewPasswordTitle} variant={'h2'}>
        Create new password
      </Typography>
      <form onSubmit={onSubmitForm}>
        <PasswordFormItem control={control} onSubmit={onSubmitForm} />
        <Typography className={s.createNewPasswordHelper} color={'grey'} variant={'body2'}>
          Your password must be between 6 and 20 characters
        </Typography>
        <Button disabled={!isDirty || !isValid} fullWidth type={'submit'}>
          Create new password
        </Button>
      </form>
    </Card>
  )
}
