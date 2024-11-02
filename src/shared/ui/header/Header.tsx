import { useState } from 'react'

import BellOutline from '@/shared/assets/icons/BellOutline'
import { Button } from '@/shared/ui/button'
import { Select } from '@/shared/ui/select'
import Link from 'next/link'

import s from './header.module.scss'

import FlagUk from '../..//assets/svg/Flag United Kingdom.svg'
import FlagRus from '../../assets/svg/Flag Russia.svg'

type Props = {
  count: number
  isAuth: boolean
}

export const Header = ({ count, isAuth }: Props) => {
  const languages = [
    { icon: FlagRus, title: 'Russian', value: 'ru' },
    { icon: FlagUk, title: 'English', value: 'en' },
  ]

  return (
    <header className={s.header}>
      <Link className={s.logo} href={'/'}>
        Instagram
      </Link>
      <div className={s.container}>
        {isAuth && (
          <div className={s.ball}>
            <BellOutline />
            {count > 0 && <div className={s.count}>{count}</div>}
          </div>
        )}
        {!isAuth && (
          <div className={s.buttons}>
            <Button as={Link} href={'/signin'} variant={'transparent'}>
              Log in
            </Button>
            <Button as={Link} href={'/signup'} variant={'primary'}>
              Sign up
            </Button>
          </div>
        )}
        <Select defaultValue={'1'} items={languages} />
      </div>
    </header>
  )
}
