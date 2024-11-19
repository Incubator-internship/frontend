'use client'

import ConfirmEmailSuccess from '@/shared/assets/icons/confirmEmailSuccess'
import { Button } from '@/shared/ui/button'
import { Typography } from '@/shared/ui/typography'
import Link from 'next/link'

import s from './confirmEmail.module.scss'

export default function ConfirmEmail() {
  return (
    <div className={s.page}>
      <Typography as={'h1'} className={s.title} variant={'h1'}>
        Congratulations!
      </Typography>
      <Typography as={'p'} className={s.subtitle} variant={'regularText16'}>
        Your email has been confirmed
      </Typography>
      <Button as={Link} className={s.button} href={'/signin'}>
        Sign In
      </Button>
      <ConfirmEmailSuccess className={s.image} />
    </div>
  )
}
