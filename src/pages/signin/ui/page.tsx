'use client'

import { SignInForm } from '@/shared/ui/forms/signIn'
import { Header } from '@/shared/ui/header'
import { clsx } from 'clsx'

import s from './signInPage.module.scss'

export default function SignInPage() {
  const handleSubmit = () => {
    console.log('SignInPage')
  }

  return (
    <>
      {/*TODO remove Header. It should be in a layout*/}
      <Header count={0} isAuth={false} />
      <main className={clsx(s.pageContainer)}>
        <div className={clsx(s.formWrapper)}>
          <SignInForm onSubmit={handleSubmit} />
        </div>
      </main>
    </>
  )
}
