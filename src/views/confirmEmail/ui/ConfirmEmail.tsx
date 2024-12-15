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
import { useLocale, useTranslations } from 'next-intl'

import s from './confirmEmail.module.scss'

export default function ConfirmEmail() {
  const [initialLoading, setInitialLoading] = useState(true)
  const [confirmEmail, { isError, isLoading }] = useRegistrationConfirmationMutation()
  const [registrationResending] = useRegistrationResendingMutation()

  const searchParams = useSearchParams()
  const code = searchParams?.get('code')

  const t = useTranslations('ConfirmEmailPage')
  const locale = useLocale()

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
        {isError ? t('TitleError') : t('TitleSuccess')}
      </Typography>
      <Typography as={'p'} className={s.subtitle} variant={'regularText16'}>
        {isError ? t('TextError') : t('TextSuccess')}
      </Typography>
      {isError ? (
        <div className={s.form}>
          <ResendVerificationForm
            onSubmit={(data: ResendVerificationFormValues) => registrationResending(data)}
          />
        </div>
      ) : (
        <Button as={Link} className={s.button} href={`${locale}/signin`}>
          {t('Btn')}
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
