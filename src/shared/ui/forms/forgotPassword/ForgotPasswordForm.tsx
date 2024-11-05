'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/shared/ui/button'
import { InputControl } from '@/shared/ui/inputControl'
import Recaptcha from '@/shared/ui/recaptcha/Recaptcha'
import { Typography } from '@/shared/ui/typography'
import Link from 'next/link'

import s from './ForgotPasswordForm.module.scss'

type ForgotPasswordFields = {
  email: string
}

export type ForgotPasswordFormProps = {}

export const ForgotPasswordForm = () => {
  const sitekey =
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LeYP3QqAAAAAESr4XvYoiQ40gZHerd5UIpp1oFR'

  const [isSent, setIsSent] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

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
    setIsSent(true)
    setIsModalOpen(true)
  })

  const closeModal = () => {
    setIsModalOpen(false)
    setIsSent(true)
  }

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
      {isModalOpen && (
        <div
          style={{
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            height: '100%',
            justifyContent: 'center',
            left: 0,
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 10,
          }}
        >
          MODAL
          <Button onClick={() => closeModal()}>Close</Button>
        </div>
      )}
    </form>
  )
}

export default ForgotPasswordForm
