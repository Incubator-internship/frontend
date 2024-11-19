import React from 'react'
import { useForm } from 'react-hook-form'

import { passwordSchema } from '@/shared/model/schemas/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
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
    },
    mode: 'onBlur',
    resolver: zodResolver(passwordFormSchema),
  })

  const router = useRouter()
  const handleTransition = () => {
    router.push('/signin')
  }

  const onSubmitForm = handleSubmit(data => {
    onSubmit({
      newPassword: data.newPassword,
      //passwordConfirmation: data.passwordConfirmation,
    })
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
        <Button
          disabled={!isDirty || !isValid}
          fullWidth
          onClick={handleTransition}
          type={'submit'}
        >
          Create new password
        </Button>
      </form>
    </Card>
  )
}
