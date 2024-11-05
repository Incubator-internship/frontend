import s from './passwordFormItem.module.scss'

import { Input } from '../../../input/Input'
import { Typography } from '../../../typography/Typography'

type PasswordFormItemProps = {
  newPassword: string
  passwordConfirmation: string
  setNewPassword: (value: string) => void
  setPasswordConfirmation: (value: string) => void
  validationError: null | string
}

export const PasswordFormItem = ({
  newPassword,
  passwordConfirmation,
  setNewPassword,
  setPasswordConfirmation,
  validationError,
}: PasswordFormItemProps) => {
  const handleNewPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value)
  }

  const handlePasswordConfirmationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirmation(event.target.value)
  }

  return (
    <div>
      <div className={s.passwordFormItemContainer}>
        <Typography color={'grey'} variant={'body2'}>
          New password
        </Typography>
        <Input onChange={handleNewPasswordChange} value={newPassword} variant={'password'} />
      </div>
      <div className={s.passwordFormItemContainer}>
        <Typography color={'grey'} variant={'body2'}>
          Password confirmation
        </Typography>
        <Input
          error={validationError ? true : null}
          onChange={handlePasswordConfirmationChange}
          value={passwordConfirmation}
          variant={'password'}
        />
      </div>
    </div>
  )
}
