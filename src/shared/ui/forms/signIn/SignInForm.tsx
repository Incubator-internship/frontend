import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import GithubIcon from '@/shared/assets/icons/GithubIcon'
import GoogleIcon from '@/shared/assets/icons/GoogleIcon'
import { createEmailSchema, createPasswordSchema } from '@/shared/model/schemas/schemas'
import { Button } from '@/shared/ui/button'
import { Card } from '@/shared/ui/card'
import { InputControl } from '@/shared/ui/inputControl'
import { Typography } from '@/shared/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { z } from 'zod'

import s from './signInForm.module.scss'

const createSignInSchema = (t: (key: string) => string) =>
  z.object({
    email: createEmailSchema(t),
    password: createPasswordSchema(t),
  })

export type Schema = z.infer<ReturnType<typeof createSignInSchema>>

type Props = {
  isError?: boolean
  onSubmit: (data: Schema) => void
}

export const SignInForm = ({ isError, onSubmit }: Props) => {
  const router = useRouter()
  const t = useTranslations('SignInPage')
  const tErrors = useTranslations('FormsErrors')

  const signInSchema = createSignInSchema(tErrors)

  const {
    control,
    formState: { isDirty, isSubmitting, isValid },
    handleSubmit,
    setError,
  } = useForm<Schema>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onTouched',
    resolver: zodResolver(signInSchema),
  })
  const onSubmitForm = (data: Schema) => {
    onSubmit(data)
  }

  useEffect(() => {
    if (isError) {
      setError('password', {
        message: t('ErrorSignIn'),
        type: 'manual',
      })
    }
  }, [isError, setError, t])

  return (
    <Card className={clsx(s.cardWrapper)}>
      <Typography as={'p'} className={clsx(s.typography)} variant={'h1'}>
        {t('FormTitle')}
      </Typography>

      <div className={clsx(s.iconsWrapper)}>
        <button onClick={() => router.push('/api/v1/auth/google')} type={'button'}>
          <GoogleIcon className={s.icon} />
        </button>
        <button type={'button'}>
          <GithubIcon className={clsx(s.icon)} fill={'white'} />
        </button>
      </div>

      <form className={clsx(s.formWrapper)} onSubmit={handleSubmit(onSubmitForm)}>
        <div className={clsx(s.inputsWrapper)}>
          <InputControl
            autoComplete={'email'}
            control={control}
            label={t('EmailInput')}
            name={'email'}
            type={'email'}
          />
          <InputControl
            control={control}
            label={t('PasswordInput')}
            name={'password'}
            variant={'password'}
          />
        </div>

        <Typography
          as={Link}
          className={clsx(s.link)}
          href={'./forgotpassword'}
          variant={'smallLink'}
        >
          {t('ForgotPasswordLabel')}
        </Typography>

        <Button disabled={!isValid || isSubmitting || !isDirty} type={'submit'}>
          {t('FormBtn')}
        </Button>
        <Typography as={'p'} className={clsx(s.text)} variant={'regularText16'}>
          {t('FormLabel')}
        </Typography>
        <Button as={Link} href={'./signup'} variant={'transparent'}>
          {t('FormLink')}
        </Button>
      </form>
    </Card>
  )
}
