import React from 'react'
import { useForm } from 'react-hook-form'

import { passwordSchema } from '@/shared/schemas/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
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
  } = useForm<FormValues>({
    defaultValues: {
      newPassword: '',
      passwordConfirmation: '',
    },
    mode: 'onBlur',
    resolver: zodResolver(passwordFormSchema),
  })

  const onSubmit = handleSubmit(data => {
    return {
      newPassword: data.newPassword,
      passwordConfirmation: data.passwordConfirmation,
    }
  })

  const errorCount = Object.keys(errors).length

  return (
    <Card className={s.createNewPasswordForm}>
      <Typography className={s.createNewPasswordTitle} variant={'h2'}>
        Create new password
      </Typography>
      <form onSubmit={onSubmit}>
        <PasswordFormItem control={control} onSubmit={onSubmit} />
        <Typography color={'red'} variant={'body2'}></Typography>
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
