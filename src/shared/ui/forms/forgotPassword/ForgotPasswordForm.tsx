'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { usePasswordRecoveryMutation } from '@/app/api/inctagramApi'
import { emailSchema } from '@/shared/model/schemas/schemas'
import { Button } from '@/shared/ui/button'
import { InputControl } from '@/shared/ui/inputControl'
import { Modal } from '@/shared/ui/modal/Modal'
import Recaptcha from '@/shared/ui/recaptcha/Recaptcha'
import { Typography } from '@/shared/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { z } from 'zod'

import s from './ForgotPasswordForm.module.scss'

const ForgotPasswordSchema = z.object({
  email: emailSchema,
  token: z.string().min(1, { message: 'Required reCAPTCHA' }),
})

type ForgotPasswordFields = z.infer<typeof ForgotPasswordSchema>

export const ForgotPasswordForm = () => {
  const sitekey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string
  const router = useRouter()

  const [isSent, setIsSent] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [submittedEmail, setSubmittedEmail] = useState('')

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
      await passwordRecovery({ email: data.email }).unwrap()
      setIsSent(true)
      setSubmittedEmail(data.email)
      setIsModalOpen(true)
    } catch (error: any) {
      if (error?.status === 400) {
        setError('email', { message: "User with this email doesn't exist." })
      } else if (error?.status === 429) {
        setError('email', {
          message: 'You have exceeded the maximum number of attempts. Please try again later.',
        })
      } else {
        console.error('Password recovery error:', error)
      }
    }
  })

  const handleRecaptchaChange = (token: null | string) => {
    setValue('token', token || '')
    trigger('token')
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    router.push('/createnewpassword')
    setIsSent(false)
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

      <Modal isOpen={isModalOpen} onClose={handleModalClose} title={'Email Sent'}>
        <Typography color={'grey'} variant={'regularText14'}>
          We have sent a link to confirm your email to <strong>{submittedEmail}</strong>.
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
