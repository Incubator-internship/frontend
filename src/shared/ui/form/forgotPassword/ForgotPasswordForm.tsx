'use client'
import { useForm } from 'react-hook-form'

import s from './ForgotPasswordForm.module.scss'

import { InputControl } from '../../inputControl'
import Recaptcha from '../../recaptcha/Recaptcha'

type ForgotPasswordFormProps = {
  sitekey?: string
}

export const ForgotPasswordForm = ({
  sitekey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
    '6LeYP3QqAAAAAESr4XvYoiQ40gZHerd5UIpp1oFR',
  // FIX: storybook don't have access to .env
}: ForgotPasswordFormProps) => {
  const { control, reset, setError, setValue, trigger } = useForm<any>({
    defaultValues: {
      email: '',
      token: '',
    },
  })

  return (
    <form className={s.forgotPasswordForm}>
      <h1>Forgot Password</h1>

      <Recaptcha sitekey={sitekey} theme={'dark'} />
    </form>
  )
}

export default ForgotPasswordForm
