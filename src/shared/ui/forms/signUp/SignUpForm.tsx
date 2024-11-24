import { useForm } from 'react-hook-form'

import { useGetUsersQuery } from '@/app/api/inctagramApi'
import { User } from '@/app/api/inctagramApi.types'
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
import { z } from 'zod'

import s from './signUpForm.module.scss'

export const createSignUpFormSchema = (usersData: User[]) =>
  z
    .object({
      agree: agreeSchema,
      confirmPassword: passwordSchema,
      email: emailSchema.superRefine((email, ctx) => {
        const emailExists = usersData?.some(user => user.email === email)

        if (emailExists) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'User with this email is already registered',
          })
        }
      }),
      password: passwordSchema,
      username: usernameSchema.superRefine((username, ctx) => {
        const userExists = usersData?.some(user => user.name === username)

        if (userExists) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'User with this username is already registered',
          })
        }
      }),
    })
    .refine(data => data.password === data.confirmPassword, {
      message: 'Passwords must match',
      path: ['confirmPassword'],
    })

export type SignUpFormValues = z.infer<ReturnType<typeof createSignUpFormSchema>>

type Props = {
  onSubmit: (data: Omit<SignUpFormValues, 'confirmPassword'>) => void
}

export const SignUpForm = ({ onSubmit }: Props) => {
  const { data: usersData } = useGetUsersQuery()
  const signUpFormSchema = createSignUpFormSchema(usersData || [])

  const {
    control,
    formState: { errors, isDirty, isValid },
    handleSubmit,
    reset,
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

  // const handleUsernameBlur = () => {
  //   const username = getValues('username') // Получаем текущее значение username
  //   const userExists = usersData?.some(el => el.name === username)
  //
  //   if (userExists) {
  //     setError('username', {
  //       message: 'User with this username is already registered',
  //       type: 'manual',
  //     })
  //   } else {
  //     clearErrors('username')
  //   }
  // }

  const onSubmitForm = handleSubmit(data => {
    onSubmit({
      agree: data.agree,
      email: data.email,
      password: data.password,
      username: data.username,
    })
    reset()
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
