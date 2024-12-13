'use client'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useLoginMutation } from '@/app/api/auth/authApi'
import { LoginData } from '@/app/api/auth/authApi.types'
import { loginStore, logoutStore, selectAuthState } from '@/app/config/store/authSlice'
import { Schema, SignInForm } from '@/shared/ui/forms/signIn'
import { clsx } from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'

import s from './signInPage.module.scss'

export default function SignInPage() {
  const [login, { data, isError, isLoading, isSuccess }] = useLoginMutation()
  const router = useRouter()
  const dispatch = useDispatch()
  const locale = useLocale()

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
      dispatch(loginStore())
      router.push(`/${locale}/profile`)
    }
  }, [data, isSuccess, router, locale])

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
