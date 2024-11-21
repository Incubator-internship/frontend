'use client'

import { useEffect } from 'react'

import { LoginData, useLoginMutation } from '@/app/api/signInApi'
import { Schema, SignInForm } from '@/shared/ui/forms/signIn'
import { clsx } from 'clsx'
import { useRouter } from 'next/navigation'

import s from './signInPage.module.scss'

export default function SignInPage() {
  const [login, { data, isError, isLoading, isSuccess }] = useLoginMutation()
  const router = useRouter()

  const handleSubmit = (data: Schema) => {
    const loginDataForRequest: LoginData = {
      loginOrEmail: data.email,
      password: data.password,
    }

    login(loginDataForRequest)
  }

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem('accessToken', data.accessToken)
      router.push('/profile')
    }
  }, [data, isSuccess, router])

  return (
    <main className={clsx(s.pageContainer)}>
      {isLoading ? (
        //TODO add the loading component when it's ready
        <div>Loading...</div>
      ) : (
        <div className={clsx(s.formWrapper)}>
          <SignInForm isError={isError} onSubmit={handleSubmit} />
        </div>
      )}
    </main>
  )
}
