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
import { z } from 'zod'

import s from './signInForm.module.scss'

const signInSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
})

export type Schema = z.infer<typeof signInSchema>

type Props = {
  onSubmit: (data: Schema) => void
}

export const SignInForm = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { isDirty, isSubmitting, isValid },
    handleSubmit,
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

  return (
    <Card className={clsx(s.cardWrapper)}>
      <Typography as={'p'} className={clsx(s.typography)} variant={'h1'}>
        Sign In
      </Typography>

      <div className={clsx(s.iconsWrapper)}>
        <button type={'button'}>
          <GoogleIcon className={clsx(s.icon)} />
        </button>
        <button type={'button'}>
          <GithubIcon className={clsx(s.icon)} fill={'white'} />
        </button>
      </div>

      <form className={clsx(s.formWrapper)} onSubmit={handleSubmit(onSubmitForm)}>
        <div className={clsx(s.inputsWrapper)}>
          <InputControl control={control} label={'Email'} name={'email'} type={'email'} />
          <InputControl
            control={control}
            label={'Password'}
            name={'password'}
            variant={'password'}
          />
        </div>

        <Typography as={'a'} className={clsx(s.link)} variant={'smallLink'}>
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
