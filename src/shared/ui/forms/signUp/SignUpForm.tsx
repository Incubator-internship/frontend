import { useForm } from 'react-hook-form'

import GithubIcon from '@/shared/assets/icons/GithubIcon'
import GoogleIcon from '@/shared/assets/icons/GoogleIcon'
import {
  createAgreeSchema,
  createEmailSchema,
  createPasswordSchema,
  createUsernameSchema,
} from '@/shared/model/schemas/schemas'
import { Button } from '@/shared/ui/button'
import { Card } from '@/shared/ui/card'
import { CheckboxControl } from '@/shared/ui/checkboxControl/CheckboxControl'
import { InputControl } from '@/shared/ui/inputControl'
import { Typography } from '@/shared/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { SerializedError } from '@reduxjs/toolkit'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { z } from 'zod'

import s from './signUpForm.module.scss'

const createSignUpFormSchema = (t: (key: string) => string) =>
  z
    .object({
      agree: createAgreeSchema(t),
      confirmPassword: createPasswordSchema(t),
      email: createEmailSchema(t),
      password: createPasswordSchema(t),
      username: createUsernameSchema(t),
    })
    .refine(data => data.password === data.confirmPassword, {
      message: t('PasswordMatch'),
      path: ['confirmPassword'],
    })

export type SignUpFormValues = z.infer<ReturnType<typeof createSignUpFormSchema>>

type FetchBaseQueryErrorWithDetails = {
  data?: {
    errorsMessages?: string[]
  }
  status: number
}

export type SignUpResponse =
  | { data: void; error?: undefined }
  | { data?: undefined; error: FetchBaseQueryErrorWithDetails | SerializedError }

type Props = {
  onSubmit: (data: Omit<SignUpFormValues, 'confirmPassword'>) => Promise<SignUpResponse> | void
}

export const SignUpForm = ({ onSubmit }: Props) => {
  const router = useRouter()
  const t = useTranslations('SignUpPage')
  const tErrors = useTranslations('FormsErrors')
  const locale = useLocale()

  const signUpFormSchema = createSignUpFormSchema(tErrors)

  const {
    control,
    formState: { errors, isDirty, isValid },
    handleSubmit,
    reset,
    setError,
  } = useForm<SignUpFormValues>({
    defaultValues: {
      agree: true,
      confirmPassword: '',
      email: '',
      password: '',
      username: '',
    },
    mode: 'onBlur',
    resolver: zodResolver(signUpFormSchema),
  })

  const onSubmitForm = handleSubmit(async data => {
    const result = await onSubmit({
      agree: data.agree,
      email: data.email,
      password: data.password,
      username: data.username,
    })

    if (result?.error) {
      if ('status' in result.error) {
        if (result.error.status === 400) {
          const errorMessage = result.error.data?.errorsMessages?.[0] || ''

          if (errorMessage.includes('userName')) {
            setError('username', {
              message: t('ErrorUsername'),
              type: 'manual',
            })
          } else if (errorMessage.includes('email')) {
            setError('email', {
              message: t('ErrorEmail'),
              type: 'manual',
            })
          }
        }
      }
    } else {
      reset()
    }
  })

  return (
    <>
      <Card className={s.card}>
        <Typography as={'h1'} className={s.title} variant={'h1'}>
          {t('FormTitle')}
        </Typography>
        <div className={s.cardTop}>
          <button onClick={() => router.push('/api/v1/auth/google')} type={'button'}>
            <GoogleIcon className={s.icon} />
          </button>
          <button type={'button'}>
            <GithubIcon className={s.icon} fill={'white'} />
          </button>
        </div>
        <form className={s.form} onSubmit={onSubmitForm}>
          <InputControl
            className={s.input}
            control={control}
            label={t('UsernameInput')}
            name={'username'}
          />
          <InputControl
            className={s.input}
            control={control}
            label={t('EmailInput')}
            name={'email'}
          />
          <InputControl
            className={s.input}
            control={control}
            label={t('PasswordInput')}
            name={'password'}
            variant={'password'}
          />
          <InputControl
            className={s.input}
            control={control}
            label={t('PasswordConfirmationInput')}
            name={'confirmPassword'}
            variant={'password'}
          />
          <CheckboxControl
            className={s.checkbox}
            control={control}
            label={
              <label htmlFor={'agree'}>
                {t.rich('Agree', {
                  link: chunks => <Link href={`/${locale}/policies/termsOfService`}>{chunks}</Link>,
                  link2: chunks => <Link href={`/${locale}/policies/privacyPolicy`}>{chunks}</Link>,
                })}
              </label>
            }
            name={'agree'}
          />
          <Button className={s.button} disabled={!isDirty || !isValid} fullWidth type={'submit'}>
            {t('FormBtn')}
          </Button>
        </form>
        <Typography as={'div'} className={s.caption} variant={'regularText16'}>
          {t('FormLabel')}
        </Typography>
        <Button as={Link} className={s.signIn} href={`/${locale}/signin`} variant={'transparent'}>
          {t('FormLink')}
        </Button>
      </Card>
    </>
  )
}
