import { Control } from 'react-hook-form'

import { InputControl } from '@/shared/ui/inputControl'

import s from './passwordFormItem.module.scss'

import { FormValues } from '../PasswordForm'

type PasswordFormItemProps = {
  control: Control<FormValues>
  onSubmit: (e: React.FormEvent) => void
}

export const PasswordFormItem = ({ control, onSubmit }: PasswordFormItemProps) => {
  return (
    <form className={s.passwordForm} onSubmit={onSubmit}>
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
    </form>
  )
}
