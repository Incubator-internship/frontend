import EyeClose from '@/shared/assets/icons/EyeClose'
import GithubIcon from '@/shared/assets/icons/GithubIcon'
import githubIcon from '@/shared/assets/icons/GithubIcon'
import GoogleIcon from '@/shared/assets/icons/GoogleIcon'
import { Button } from '@/shared/ui/button'
import { Card } from '@/shared/ui/card'
import { Input } from '@/shared/ui/input'
import { Textarea } from '@/shared/ui/textarea'
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
        <GoogleIcon className={clsx(s.icon)} />
        <GithubIcon className={clsx(s.icon)} fill={'white'} />
      </div>
      <form className={clsx(s.formWrapper)}>
        <Input className={clsx(s.textarea)} label={'Email'} type={'email'} />
        <Input label={'Password'} type={'password'} />
        <Typography as={'a'} className={clsx(s.link)} variant={'smallLink'}>
          Forgot password
        </Typography>
        <Button>Sign In</Button>
        <Typography as={'a'} className={clsx(s.link)} variant={'smallLink'}>
          Don’t have an account?
        </Typography>
        <Button>Sign Up</Button>
      </form>
    </Card>
  )
}
