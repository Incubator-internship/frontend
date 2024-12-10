'use client'

import { ForgotPasswordForm } from '@/shared/ui/forms/forgotPassword'

import s from './forgotPasswordPage.module.scss'

export default function ForgotPasswordPage() {
  return (
    <div>
      <main>
        <div className={s.page}>
          <ForgotPasswordForm />
        </div>
      </main>
    </div>
  )
}
