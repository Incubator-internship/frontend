import s from './passwordFormItem.module.scss'

import { Input } from '../../../input/Input'
import { Typography } from '../../../typography/Typography'

export const PasswordFormItem = () => {
  return (
    <div>
      <div className={s.passwordFormItemContainer}>
        <Typography color={'grey'} variant={'body2'}>
          New password
        </Typography>
        <Input variant={'password'} />
      </div>
      <div className={s.passwordFormItemContainer}>
        <Typography color={'grey'} variant={'body2'}>
          Password confirmation
        </Typography>
        <Input variant={'password'} />
      </div>
    </div>
  )
}
