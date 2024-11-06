import ArrowBack from '@/shared/assets/icons/ArrowBack'
import { Typography } from '@/shared/ui/typography'
import clsx from 'clsx'
import Link from 'next/link'

import s from './policiesWrapper.module.scss'

type Props = {
  text: string
  title: string
}

export function PoliciesWrapper({ text, title }: Props) {
  return (
    <>
      <Link className={clsx(s.button)} href={'/signup'}>
        <ArrowBack fill={'#fff'} />
        Back to Sign Up
      </Link>

      <div className={clsx(s.textWrapper)}>
        <Typography as={'p'} className={clsx(s.title)} variant={'h1'}>
          {title}
        </Typography>
        <Typography variant={'regularText14'}>{text}</Typography>
      </div>
    </>
  )
}
