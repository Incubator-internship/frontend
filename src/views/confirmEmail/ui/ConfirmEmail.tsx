'use client'

import { useEffect, useState } from 'react'

import {
  useRegistrationConfirmationMutation,
  useRegistrationResendingMutation,
} from '@/app/api/auth/authApi'
import rafikiImage from '@/shared/assets/images/rafiki.png'
import successImage from '@/shared/assets/images/success.png'
import { Button } from '@/shared/ui/button'
import {
  ResendVerificationForm,
  ResendVerificationFormValues,
} from '@/shared/ui/forms/resendVerification'
import { Typography } from '@/shared/ui/typography'
import Image from 'next/image'
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
          <ResendVerificationForm
            onSubmit={(data: ResendVerificationFormValues) => registrationResending(data)}
          />
        </div>
      ) : (
        <Button as={Link} className={s.button} href={'/signin'}>
          Sign In
        </Button>
      )}
      <Image
        alt={'illustration'}
        className={s.image}
        src={isError ? rafikiImage : successImage}
        width={420}
      />
    </div>
  )
}
