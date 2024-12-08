'use client'

import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

import { usePasswordRecoveryMutation } from '@/app/api/auth/authApi'
import rafikiImage from '@/shared/assets/images/rafiki.png'
import { emailSchema } from '@/shared/model/schemas/schemas'
import { Button } from '@/shared/ui/button'
import { InputControl } from '@/shared/ui/inputControl'
import { Modal } from '@/shared/ui/modal/Modal'
import Recaptcha from '@/shared/ui/recaptcha/Recaptcha'
import { Typography } from '@/shared/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { z } from 'zod'

import s from './ForgotPasswordForm.module.scss'

const ForgotPasswordSchema = z.object({
  email: emailSchema,
  token: z.string().min(1, { message: 'Required reCAPTCHA' }),
})

export type ForgotPasswordFields = z.infer<typeof ForgotPasswordSchema>

export const ForgotPasswordForm = () => {
  const sitekey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string

  const [isSent, setIsSent] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [submittedEmail, setSubmittedEmail] = useState('')
  const [isRecoveryCodeValid, setIsRecoveryCodeValid] = useState(true)
  const t = useTranslations('ForgotPasswordPage')

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    setError,
    setValue,
    trigger,
  } = useForm<ForgotPasswordFields>({
    defaultValues: { email: '', token: '' },
    mode: 'onChange',
    resolver: zodResolver(ForgotPasswordSchema),
  })

  const [passwordRecovery] = usePasswordRecoveryMutation()

  const startTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    timerRef.current = setTimeout(
      () => {
        setIsRecoveryCodeValid(false)
      },
      5 * 60 * 1000
    ) // 5minutes
  }

  interface ApiError {
    errorsMessages?: Array<{
      field: string
      message: string
    }>
    status: number
  }

  function isApiError(error: unknown): error is ApiError {
    return (
      typeof error === 'object' &&
      error !== null &&
      'status' in error &&
      typeof (error as ApiError).status === 'number'
    )
  }

  const onSubmitForm = handleSubmit(async data => {
    if (!data.token) {
      trigger('token')

      return
    }

    try {
      await passwordRecovery({ email: data.email }).unwrap()
      setIsSent(true)
      setSubmittedEmail(data.email)
      setIsModalOpen(true)
    } catch (error: unknown) {
      if (isApiError(error)) {
        if (error.status === 400) {
          setError('email', { message: "User with this email doesn't exist." })
        } else if (error.status === 429) {
          setError('email', {
            message: 'You have exceeded the maximum number of attempts. Please try again later.',
          })
        }
      } else {
        console.error('Unknown error:', error)
      }
    }
  })

  const handleRecaptchaChange = (token: null | string) => {
    setValue('token', token || '')
    trigger('token')
  }

  const handleModalClose = () => {
    setIsModalOpen(false)

    setIsSent(true)
    startTimer()
  }

  //NOTE: Clear timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [])

  return (
    <form className={s.forgotPasswordForm} onSubmit={onSubmitForm}>
      {isRecoveryCodeValid && (
        <>
          <Typography className={s.title} color={'white'} variant={'h1'}>
            {t('ForgotPassword')}
          </Typography>

          <InputControl
            control={control}
            label={t('Email')}
            name={'email'}
            placeholder={'Epam@epam.com'}
          />

          <Typography color={'grey'} variant={'regularText14'}>
            {t('Enter your email address and we will send you further instructions')}
          </Typography>

          {isSent && (
            <Typography color={'white'} variant={'regularText14'}>
              {t('Link')}
            </Typography>
          )}

          <Button disabled={!isValid} fullWidth type={'submit'} variant={'primary'}>
            {isSent ? t('Send Link Again') : t('Send Link')}
          </Button>

          <Button as={Link} fullWidth href={'/signin'} variant={'transparent'}>
            {t('Back to Sign In')}
          </Button>

          {!isSent && (
            <Recaptcha
              error={errors.token?.message}
              onChange={handleRecaptchaChange}
              sitekey={sitekey}
            />
          )}
        </>
      )}
      {!isRecoveryCodeValid && (
        <>
          <Typography className={s.title} color={'white'} variant={'h1'}>
            {t('Email verification link expired')}
          </Typography>

          <Typography color={'white'} variant={'regularText14'}>
            {t(
              'Looks like the verification link has expired. Not to worry, we can send the link again'
            )}
          </Typography>

          <Button fullWidth type={'submit'} variant={'primary'}>
            {t('Resend link')}
          </Button>
          <Image alt={'illustration'} src={rafikiImage} width={360} />
        </>
      )}

      <Modal isOpen={isModalOpen} onClose={handleModalClose} title={'Email Sent'}>
        <Typography color={'grey'} variant={'regularText14'}>
          {t('We have sent a link to confirm your email to')} <strong>{submittedEmail}</strong>.
        </Typography>
        <div className={s.buttonWrapper}>
          <Button onClick={handleModalClose} variant={'primary'}>
            OK
          </Button>
        </div>
      </Modal>
    </form>
  )
}

export default ForgotPasswordForm
