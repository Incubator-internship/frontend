'use client'

import { useEffect } from 'react'

import { useLoginMutation } from '@/app/api/auth/authApi'
import { LoginData } from '@/app/api/auth/authApi.types'
import { Schema, SignInForm } from '@/shared/ui/forms/signIn'
import { clsx } from 'clsx'
import Link from 'next/link'
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

  const renderContent = () => {
    if (isLoading) {
      return <div className={clsx(s.loading)}>Loading...</div>
    }
    if (isSuccess) {
      return <Link href={'/profile'} />
    } else {
      return (
        <div className={clsx(s.formWrapper)}>
          <SignInForm isError={isError} onSubmit={handleSubmit} />
        </div>
      )
    }
  }

  return <main className={clsx(s.pageContainer)}>{renderContent()}</main>
}