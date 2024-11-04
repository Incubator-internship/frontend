import s from './passwordForm.module.scss'

import { Button } from '../../button'
import { Typography } from '../../typography'
import { PasswordFormItem } from '../passwordForm/passwordFormItem'

export const PasswordForm = () => {
  return (
    <div className={s.createNewPasswordForm}>
      <Typography className={s.createNewPasswordTitle} variant={'h2'}>
        Create New Password
      </Typography>
      <PasswordFormItem />
      <Typography className={s.createNewPasswordHelper} color={'grey'} variant={'body2'}>
        Your password must be between 6 and 20 characters
      </Typography>
      <Button fullWidth>
        <Typography variant={'body1'}>Create new password</Typography>
      </Button>
    </div>
  )
}
