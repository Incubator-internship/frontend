'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { emailSchema } from '@/shared/schemas/schemas'
import { Button } from '@/shared/ui/button'
import { InputControl } from '@/shared/ui/inputControl'
import Recaptcha from '@/shared/ui/recaptcha/Recaptcha'
import { Typography } from '@/shared/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { z } from 'zod'

import s from './ForgotPasswordForm.module.scss'

const ForgotPasswordSchema = z
  .object({
    email: emailSchema,
  })
  .refine(data => data.email, {
    message: 'Invalid email address',
    path: ['email'],
  })

type ForgotPasswordFields = z.infer<typeof ForgotPasswordSchema>

export type ForgotPasswordFormProps = {}

export const ForgotPasswordForm = () => {
  const sitekey =
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LeYP3QqAAAAAESr4XvYoiQ40gZHerd5UIpp1oFR'

  const [isSent, setIsSent] = useState<boolean>(false)

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ForgotPasswordFields>({
    defaultValues: {
      email: '',
    },
    mode: 'onBlur',
    resolver: zodResolver(ForgotPasswordSchema),
  })

  const onSubmit = handleSubmit(data => {
    console.log(data)
    setIsSent(true)
  })

  const closeModal = () => {
    setIsSent(true)
  }

  return (
    <form className={s.forgotPasswordForm} onSubmit={onSubmit}>
      <Typography className={s.title} color={'grey'} variant={'h1'}>
        Forgot Password
      </Typography>
      <InputControl
        control={control}
        label={'Email'}
        name={'email'}
        placeholder={'Epam@epam.com'}
      />
      <Typography color={'grey'} variant={'regularText14'}>
        Enter your email address and we will send you further instructions{' '}
      </Typography>
      {isSent && (
        <Typography color={'white'} variant={'regularText14'}>
          The link has been sent by email. If you don’t receive an email send link again
        </Typography>
      )}
      <Button fullWidth type={'submit'} variant={'primary'}>
        {`Send Link${isSent ? ' Again' : ''}`}
      </Button>
      <Button as={Link} fullWidth href={'/signin'} variant={'transparent'}>
        Back to Sign In
      </Button>
      {!isSent && <Recaptcha sitekey={sitekey} />}
    </form>
  )
}

export default ForgotPasswordForm
