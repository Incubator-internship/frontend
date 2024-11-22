import { useForm } from 'react-hook-form'

import GitHub from '@/shared/assets/icons/GitHub'
import Google from '@/shared/assets/icons/Google'
import {
  agreeSchema,
  emailSchema,
  passwordSchema,
  usernameSchema,
} from '@/shared/model/schemas/schemas'
import { Button } from '@/shared/ui/button'
import { Card } from '@/shared/ui/card'
import { CheckboxControl } from '@/shared/ui/checkboxControl/CheckboxControl'
import { InputControl } from '@/shared/ui/inputControl'
import { Typography } from '@/shared/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { any, z } from 'zod'

import s from './signUpForm.module.scss'

const signUpFormSchema = z
  .object({
    agree: agreeSchema,
    confirmPassword: passwordSchema,
    email: emailSchema,
    password: passwordSchema,
    username: usernameSchema,
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'The passwords must match',
    path: ['confirmPassword'],
  })

export type FormValues = z.infer<typeof signUpFormSchema>

type Props = {
  onSubmit: (data: Omit<FormValues, 'confirmPassword'>) => void
}

export const SignUpForm = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { isDirty, isValid },
    handleSubmit,
  } = useForm<FormValues>({
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

  const onSubmitForm = handleSubmit(data => {
    onSubmit({
      agree: data.agree,
      email: data.email,
      password: data.password,
      username: data.username,
    })
  })

  return (
    <>
      <Card className={s.card}>
        <Typography as={'h1'} className={s.title} variant={'h1'}>
          Sign Up
        </Typography>
        <div className={s.cardTop}>
          <button type={'button'}>
            <Google />
          </button>
          <button type={'button'}>
            <GitHub />
          </button>
        </div>
        <form className={s.form} onSubmit={onSubmitForm}>
          <InputControl
            className={s.input}
            control={control}
            label={'Username'}
            name={'username'}
          />
          <InputControl className={s.input} control={control} label={'Email'} name={'email'} />
          <InputControl
            className={s.input}
            control={control}
            label={'Password'}
            name={'password'}
            variant={'password'}
          />
          <InputControl
            className={s.input}
            control={control}
            label={'Password confirmation'}
            name={'confirmPassword'}
            variant={'password'}
          />
          <CheckboxControl
            className={s.checkbox}
            control={control}
            label={
              <label htmlFor={'agree'}>
                I agree to the <Link href={'/policies/termsOfService'}>Terms of Service</Link> and{' '}
                <Link href={'/policies/privacyPolicy'}>Privacy Policy</Link>
              </label>
            }
            name={'agree'}
          />
          <Button className={s.button} disabled={!isDirty || !isValid} fullWidth type={'submit'}>
            Sign Up
          </Button>
        </form>
        <Typography as={'div'} className={s.caption} variant={'regularText16'}>
          Do you have an account?
        </Typography>
        <Button as={Link} className={s.signIn} href={'/signin'} variant={'transparent'}>
          Sign In
        </Button>
      </Card>
    </>
  )
}
