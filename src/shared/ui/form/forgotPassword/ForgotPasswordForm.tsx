'use client'
import { useForm } from 'react-hook-form'

import { Button } from '@/shared/ui/button'
import { InputControl } from '@/shared/ui/inputControl'
import Recaptcha from '@/shared/ui/recaptcha/Recaptcha'
import { Typography } from '@/shared/ui/typography'

import s from './ForgotPasswordForm.module.scss'

type ForgotPasswordFields = {
  email: string
}

export type ForgotPasswordFormProps = {}

export const ForgotPasswordForm = () => {
  const sitekey =
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LeYP3QqAAAAAESr4XvYoiQ40gZHerd5UIpp1oFR'

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ForgotPasswordFields>({
    defaultValues: {
      email: '',
    },
  })

  const emailRegex =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/
  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  return (
    <form className={s.forgotPasswordForm} onSubmit={onSubmit}>
      <Typography className={s.title} color={'grey'} variant={'h1'}>
        Forgot Password
      </Typography>
      <InputControl<ForgotPasswordFields>
        control={control}
        label={'Email'}
        name={'email'}
        placeholder={'Epam@epam.com'}
        rules={{
          pattern: { message: 'Invalid email address', value: emailRegex },
          required: 'Email is required',
        }}
      />
      <Typography color={'grey'} variant={'regularText14'}>
        Enter your email address and we will send you further instructions{' '}
      </Typography>
      <Button fullWidth type={'submit'} variant={'primary'}>
        Send Link
      </Button>
      <Button fullWidth variant={'transparent'}>
        Back to Sign In
      </Button>
      <Recaptcha sitekey={sitekey} />
    </form>
  )
}

export default ForgotPasswordForm
