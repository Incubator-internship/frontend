'use client'

import { SignInForm } from '@/shared/ui/forms/signIn'
import { clsx } from 'clsx'

import s from './signInPage.module.scss'

export default function SignInPage() {
  const handleSubmit = () => {
    console.log('SignInPage')
  }

  return (
    <main className={clsx(s.pageContainer)}>
      <div className={clsx(s.formWrapper)}>
        <SignInForm onSubmit={handleSubmit} />
      </div>
    </main>
  )
}
