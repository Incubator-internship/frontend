'use client'

import { ForgotPasswordForm } from '@/shared/ui/forms/forgotPassword'

import s from './page.module.scss'

export default function Home() {
  return (
    <div>
      <main>
        <div className={s.page}>
          <ForgotPasswordForm onSubmit={() => {}} />
        </div>
      </main>
    </div>
  )
}

// http://localhost:3000/forgotPasswordPage
