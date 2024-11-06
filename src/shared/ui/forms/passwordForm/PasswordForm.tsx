import React from 'react'
import { useForm } from 'react-hook-form'

import { error } from 'console'

import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { z } from 'zod'

import s from './passwordForm.module.scss'

import { Button } from '../../button'
import { Card } from '../../card'
import { Typography } from '../../typography'
import { PasswordFormItem } from './passwordFormItem'

const passwordSchema = z
  .object({
    newPassword: z.string().min(6).max(20),
    passwordConfirmation: z.string().min(6).max(20),
  })
  .refine(data => data.newPassword === data.passwordConfirmation, {
    message: 'The passwords must match',
    path: ['passwordConfirmation'],
  })

export type FormValues = z.infer<typeof passwordSchema>

export const PasswordForm = () => {
  const {
    control,
    formState: { isDirty, isValid },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      newPassword: '',
      passwordConfirmation: '',
    },
    mode: 'onBlur',
    resolver: zodResolver(passwordSchema),
  })

  const onSubmit = handleSubmit(data => {
    return {
      newPassword: data.newPassword,
      passwordConfirmation: data.passwordConfirmation,
    }
  })

  return (
    <Card className={s.createNewPasswordForm}>
      <Typography className={s.createNewPasswordTitle} variant={'h2'}>
        Create new password
      </Typography>
      <PasswordFormItem control={control} onSubmit={onSubmit} />
      <Typography color={'red'} variant={'body2'}></Typography>
      <Typography className={s.createNewPasswordHelper} color={'grey'} variant={'body2'}>
        Your password must be between 6 and 20 characters
      </Typography>
      <Button disabled={!isDirty || !isValid} fullWidth type={'submit'}>
        <Typography variant={'body1'}>Create new password</Typography>
      </Button>
    </Card>
  )
}
