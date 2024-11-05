import React from 'react'

import clsx from 'clsx'
import { z } from 'zod'

import s from './passwordForm.module.scss'

import { Button } from '../../button'
import { Typography } from '../../typography'
import { PasswordFormItem } from '../passwordForm/passwordFormItem'

const passwordSchema = z
  .object({
    newPassword: z.string().min(6).max(20),
    passwordConfirmation: z.string().min(6).max(20),
  })
  .refine(data => data.newPassword === data.passwordConfirmation, {
    message: 'The passwords must match',
    path: ['passwordConfirmation'],
  })

export const PasswordForm = () => {
  const [newPassword, setNewPassword] = React.useState('')
  const [passwordConfirmation, setPasswordConfirmation] = React.useState('')
  const [validationError, setValidationError] = React.useState<null | string>(null)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const validationResult = passwordSchema.safeParse({ newPassword, passwordConfirmation })

    if (validationResult.success) {
      //console.log(validationResult.data)
      setValidationError(null)
    } else {
      //console.log(validationResult.error)
      setValidationError(validationResult.error.issues[0]?.message || 'Validation failed')
    }
  }

  return (
    <form
      className={clsx(s.createNewPasswordForm, validationError && s.createNewPasswordFormWithError)}
      onSubmit={handleSubmit}
    >
      <Typography className={s.createNewPasswordTitle} variant={'h2'}>
        Create new password
      </Typography>
      <PasswordFormItem
        newPassword={newPassword}
        passwordConfirmation={passwordConfirmation}
        setNewPassword={setNewPassword}
        setPasswordConfirmation={setPasswordConfirmation}
        validationError={validationError}
      />
      {validationError && (
        <Typography color={'red'} variant={'body2'}>
          {validationError}
        </Typography>
      )}
      <Typography className={s.createNewPasswordHelper} color={'grey'} variant={'body2'}>
        Your password must be between 6 and 20 characters
      </Typography>
      <Button fullWidth type={'submit'}>
        <Typography variant={'body1'}>Create new password</Typography>
      </Button>
    </form>
  )
}
