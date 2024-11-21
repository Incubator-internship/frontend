'use client'

import { useEffect, useLayoutEffect, useState } from 'react'

import {
  useRegistrationConfirmationMutation,
  useRegistrationResendingMutation,
} from '@/app/api/inctagramApi'
import ConfirmEmailError from '@/shared/assets/icons/ConfirmEmailError'
import ConfirmEmailSuccess from '@/shared/assets/icons/ConfirmEmailSuccess'
import { Button } from '@/shared/ui/button'
import {
  ResendVerificationForm,
  ResendVerificationFormValues,
} from '@/shared/ui/forms/resendVerification'
import { Typography } from '@/shared/ui/typography'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import s from './confirmEmail.module.scss'

export default function ConfirmEmail() {
  const [initialLoading, setInitialLoading] = useState(true)
  const [confirmEmail, { isError, isLoading }] = useRegistrationConfirmationMutation()
  const [registrationResending] = useRegistrationResendingMutation()

  const searchParams = useSearchParams()
  const code = searchParams?.get('code')

  useEffect(() => {
    if (code && initialLoading) {
      confirmEmail({ code }).finally(() => setInitialLoading(false))
    }
  }, [code, initialLoading])

  const onSubmit = (data: ResendVerificationFormValues) => {
    registrationResending(data)
  }

  if (initialLoading || isLoading) {
    return <>Loading...</>
  }

  return (
    <div className={s.page}>
      <Typography as={'h1'} className={s.title} variant={'h1'}>
        {isError ? 'Email verification link expired' : 'Congratulations!'}
      </Typography>
      <Typography as={'p'} className={s.subtitle} variant={'regularText16'}>
        {isError
          ? 'Looks like the verification link has expired. Not to worry, we can send the link again'
          : 'Your email has been confirmed'}
      </Typography>
      {isError ? (
        <div className={s.form}>
          <ResendVerificationForm onSubmit={onSubmit} />
        </div>
      ) : (
        <Button as={Link} className={s.button} href={'/signin'}>
          Sign In
        </Button>
      )}
      {isError ? (
        <ConfirmEmailError className={s.image} />
      ) : (
        <ConfirmEmailSuccess className={s.image} />
      )}
    </div>
  )
}
