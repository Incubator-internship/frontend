'use client'

import { ForgotPasswordForm } from '@/shared/ui/forms/forgotPassword'

import s from './page.module.scss'

export default function Page() {
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
