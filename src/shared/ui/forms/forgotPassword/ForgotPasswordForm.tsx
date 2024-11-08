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
    token: z.string().min(1, { message: 'Required reCAPTCHA' }),
  })
  .required()

type ForgotPasswordFields = z.infer<typeof ForgotPasswordSchema>

export type ForgotPasswordFormProps = {
  onSubmit: (data: ForgotPasswordFields) => void
}

export const ForgotPasswordForm = ({ onSubmit }: ForgotPasswordFormProps) => {
  const sitekey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string

  const [isSent, setIsSent] = useState<boolean>(false)

  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    setValue,
    trigger,
  } = useForm<ForgotPasswordFields>({
    defaultValues: {
      email: '',
      token: '',
    },
    mode: 'onChange',
    resolver: zodResolver(ForgotPasswordSchema),
  })

  const onSubmitForm = handleSubmit(data => {
    if (!data.token) {
      trigger('token')

      return
    }
    onSubmit(data)
    setIsSent(true)
    reset({ email: '', token: '' })
  })

  const onChangeToken = (token: null | string) => {
    console.log('token', token)
    if (token) {
      setValue('token', token)
      trigger('token')
    } else {
      setValue('token', '')
      trigger('token')
    }
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
      <Typography color={'grey'} variant={'regularText14'}>
        Enter your email address and we will send you further instructions
      </Typography>
      {isSent && (
        <Typography color={'white'} variant={'regularText14'}>
          The link has been sent by email. If you don’t receive an email send link again
        </Typography>
      )}
      <Button disabled={!isValid} fullWidth type={'submit'} variant={'primary'}>
        {`Send Link${isSent ? ' Again' : ''}`}
      </Button>
      <Button as={Link} fullWidth href={'/signin'} variant={'transparent'}>
        Back to Sign In
      </Button>
      {!isSent && (
        <Recaptcha
          error={errors.token ? errors.token.message : undefined}
          onChange={onChangeToken}
          sitekey={sitekey}
        />
      )}
    </form>
  )
}

export default ForgotPasswordForm
