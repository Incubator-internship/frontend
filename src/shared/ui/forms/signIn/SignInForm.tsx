import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import GithubIcon from '@/shared/assets/icons/GithubIcon'
import GoogleIcon from '@/shared/assets/icons/GoogleIcon'
import { emailSchema, passwordSchema } from '@/shared/model/schemas/schemas'
import { Button } from '@/shared/ui/button'
import { Card } from '@/shared/ui/card'
import { InputControl } from '@/shared/ui/inputControl'
import { Typography } from '@/shared/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { z } from 'zod'

import s from './signInForm.module.scss'

export const signInSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
})

export type Schema = z.infer<typeof signInSchema>

type Props = {
  isError?: boolean
  onSubmit: (data: Schema) => void
}

export const SignInForm = ({ isError, onSubmit }: Props) => {
  const router = useRouter()
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
        message: 'The email or password are incorrect. Try again please',
        type: 'manual',
      })
    }
  }, [isError, setError])

  return (
    <Card className={clsx(s.cardWrapper)}>
      <Typography as={'p'} className={clsx(s.typography)} variant={'h1'}>
        Sign In
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
            label={'Email'}
            name={'email'}
            type={'email'}
          />
          <InputControl
            control={control}
            label={'Password'}
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
          Forgot Password
        </Typography>

        <Button disabled={!isValid || isSubmitting || !isDirty} type={'submit'}>
          Sign In
        </Button>
        <Typography as={'p'} className={clsx(s.text)} variant={'regularText16'}>
          Don’t have an account?
        </Typography>
        <Button as={Link} href={'/signup'} variant={'transparent'}>
          Sign Up
        </Button>
      </form>
    </Card>
  )
}
