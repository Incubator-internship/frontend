'use client'
import { PasswordForm } from '@/shared/ui/forms/passwordForm'

import s from './CreateNewPassword.module.scss'

export default function NewPasswordPage() {
  const onSubmit = () => {}

  return (
    <div className={s.passwordFormPage}>
      <PasswordForm onSubmit={onSubmit} />
    </div>
  )
}
