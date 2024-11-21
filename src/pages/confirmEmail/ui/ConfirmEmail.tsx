'use client'

import { useEffect, useLayoutEffect, useState } from 'react'

import { useRegistrationConfirmationMutation } from '@/app/api/inctagramApi'
import ConfirmEmailError from '@/shared/assets/icons/ConfirmEmailError'
import ConfirmEmailSuccess from '@/shared/assets/icons/ConfirmEmailSuccess'
import { Button } from '@/shared/ui/button'
import { Typography } from '@/shared/ui/typography'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import s from './confirmEmail.module.scss'

export default function ConfirmEmail() {
  const [initialLoading, setInitialLoading] = useState(true)
  const [confirmEmail, { isError, isLoading }] = useRegistrationConfirmationMutation()

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
        ''
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
