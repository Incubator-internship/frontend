'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { usePasswordRecoveryMutation } from '@/app/api/inctagramApi'
import { emailSchema } from '@/shared/model/schemas/schemas'
import { Button } from '@/shared/ui/button'
import { InputControl } from '@/shared/ui/inputControl'
import Recaptcha from '@/shared/ui/recaptcha/Recaptcha'
import { Typography } from '@/shared/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { z } from 'zod'

import s from './ForgotPasswordForm.module.scss'

const ForgotPasswordSchema = z.object({
  email: emailSchema,
  token: z.string().min(1, { message: 'Required reCAPTCHA' }),
})

type ForgotPasswordFields = z.infer<typeof ForgotPasswordSchema>

export const ForgotPasswordForm = () => {
  const sitekey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string

  const [isSent, setIsSent] = useState(false)
  const [serverError, setServerError] = useState<null | string>(null)

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

  const onSubmitForm = handleSubmit(async data => {
    if (!data.token) {
      trigger('token')

      return
    }

    try {
      setServerError(null)
      await passwordRecovery({ email: data.email }).unwrap()
      setIsSent(true)
    } catch (error: any) {
      if (error?.status === 400 && error?.data?.errorsMessages) {
        const emailError = error.data.errorsMessages.find((err: any) => err.field === 'email')

        if (emailError) {
          setError('email', { message: emailError.message, type: 'server' })
        }
      } else if (error?.status === 429) {
        setServerError('You have exceeded the maximum number of attempts. Please try again later.')
      } else {
        console.error('Password recovery error:', error)
      }
    }
  })

  const handleRecaptchaChange = (token: null | string) => {
    setValue('token', token || '')
    trigger('token')
  }

  return (
    <form className={s.forgotPasswordForm} onSubmit={onSubmitForm}>
      <Typography className={s.title} color={'grey'} variant={'h1'}>
        Forgot Password
      </Typography>

      <InputControl
        control={control}
        label={'Email'}
        name={'email'}
        placeholder={'Epam@epam.com'}
      />

      {serverError && (
        <Typography color={'red'} variant={'regularText14'}>
          {serverError}
        </Typography>
      )}

      <Typography color={'grey'} variant={'regularText14'}>
        Enter your email address and we will send you further instructions
      </Typography>

      {isSent && (
        <Typography color={'white'} variant={'regularText14'}>
          The link has been sent by email. If you don’t receive an email, try again.
        </Typography>
      )}

      <Button disabled={!isValid} fullWidth type={'submit'} variant={'primary'}>
        {isSent ? 'Send Link Again' : 'Send Link'}
      </Button>

      <Button as={Link} fullWidth href={'/signin'} variant={'transparent'}>
        Back to Sign In
      </Button>

      {!isSent && (
        <Recaptcha
          error={errors.token?.message}
          onChange={handleRecaptchaChange}
          sitekey={sitekey}
        />
      )}
    </form>
  )
}

export default ForgotPasswordForm
