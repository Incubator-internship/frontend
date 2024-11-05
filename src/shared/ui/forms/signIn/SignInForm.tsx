import EyeClose from '@/shared/assets/icons/EyeClose'
import GithubIcon from '@/shared/assets/icons/GithubIcon'
import githubIcon from '@/shared/assets/icons/GithubIcon'
import GoogleIcon from '@/shared/assets/icons/GoogleIcon'
import { Button } from '@/shared/ui/button'
import { Card } from '@/shared/ui/card'
import { Input } from '@/shared/ui/input'
import { Typography } from '@/shared/ui/typography'
import clsx from 'clsx'
import Link from 'next/link'

import s from './signInForm.module.scss'

export const SignInForm = () => {
  return (
    <Card className={clsx(s.cardWrapper)}>
      <Typography as={'p'} className={clsx(s.typography)} variant={'h1'}>
        Sign In
      </Typography>

      <div className={clsx(s.iconsWrapper)}>
        <Button as={Link} href={'/googleSignIn'} variant={'transparent'}>
          <GoogleIcon className={clsx(s.icon)} />
        </Button>
        <Button as={Link} href={'/githubSignIn'} variant={'transparent'}>
          <GithubIcon className={clsx(s.icon)} fill={'white'} />
        </Button>
      </div>

      <form className={clsx(s.formWrapper)}>
        <div className={clsx(s.inputWrapper)}>
          <Input label={'Email'} type={'email'} />
          <Input label={'Password'} type={'password'} variant={'password'} />
        </div>

        <Typography as={'a'} className={clsx(s.link)} variant={'smallLink'}>
          Forgot Password
        </Typography>

        <Button>Sign In</Button>
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
