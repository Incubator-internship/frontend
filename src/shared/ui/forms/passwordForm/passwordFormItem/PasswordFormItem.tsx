import { InputControl } from '@/shared/ui/inputControl'

import s from './passwordFormItem.module.scss'

import { PasswordFormItemProps } from '../types'

export const PasswordFormItem = ({ control, errors }: PasswordFormItemProps) => {
  return (
    <div className={s.passwordForm}>
      <InputControl
        className={s.passwordFormItemInput}
        control={control}
        label={'New password'}
        name={'newPassword'}
        variant={'password'}
      />
      <InputControl
        className={s.passwordFormItemInput}
        control={control}
        label={'Password confirmation'}
        name={'passwordConfirmation'}
        variant={'password'}
      />
      {errors.recoveryCode && <span className={s.inputError}>{errors.recoveryCode.message}</span>}
      {errors.root && <span className={s.inputError}>{errors.root.message}</span>}
    </div>
  )
}
