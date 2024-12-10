'use client'
import { PasswordForm } from '@/shared/ui/forms/passwordForm'

import s from './newPasswordPage.module.scss'

export default function NewPasswordPage() {
  return (
    <div className={s.passwordFormPage}>
      <PasswordForm />
    </div>
  )
}
