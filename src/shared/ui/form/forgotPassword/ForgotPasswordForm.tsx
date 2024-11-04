'use client'
import { useForm } from 'react-hook-form'

import s from './ForgotPasswordForm.module.scss'

import { Button } from '../../button'
import { InputControl } from '../../inputControl'
import Recaptcha from '../../recaptcha/Recaptcha'
import { Typography } from '../../typography/Typography'

type ForgotPasswordFields = {
  email: string
}

export type ForgotPasswordFormProps = {}

export const ForgotPasswordForm = () => {
  const sitekey =
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LeYP3QqAAAAAESr4XvYoiQ40gZHerd5UIpp1oFR'

  const { control } = useForm<ForgotPasswordFields>({
    defaultValues: {
      email: '',
    },
  })

  return (
    <form className={s.forgotPasswordForm}>
      <h1>Forgot Password</h1>
      <InputControl
        control={control}
        label={'Email'}
        name={'email'}
        placeholder={'Epam@epam.com'}
      />
      <Typography color={'grey'} variant={'regularText14'}>
        Enter your email address and we will send you further instructions{' '}
      </Typography>
      <Button fullWidth variant={'primary'}>
        Send Link
      </Button>
      <Recaptcha sitekey={sitekey} theme={'dark'} />
    </form>
  )
}

export default ForgotPasswordForm
