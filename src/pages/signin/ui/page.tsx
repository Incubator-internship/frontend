'use client'

import { LoginData, useLoginMutation } from '@/app/api/signInApi'
import { Schema, SignInForm } from '@/shared/ui/forms/signIn'
import { clsx } from 'clsx'

import s from './signInPage.module.scss'

export default function SignInPage() {
  const [login, { data, isError, isLoading, isSuccess }] = useLoginMutation()

  const handleSubmit = (data: Schema) => {
    console.log('signInData', data)

    const userDataForRequest: LoginData = {
      loginOrEmail: data.email,
      password: data.password,
    }

    login(userDataForRequest)
  }

  return (
    <main className={clsx(s.pageContainer)}>
      <div className={clsx(s.formWrapper)}>
        <SignInForm onSubmit={handleSubmit} />
      </div>
    </main>
  )
}
