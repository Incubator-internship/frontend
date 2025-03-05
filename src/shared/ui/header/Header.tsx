'use client'

import { useGetMeQuery } from '@/app/api/auth/authApi'
import BellOutline from '@/shared/assets/icons/BellOutline'
import { Button } from '@/shared/ui/button'
import { Select } from '@/shared/ui/select'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

import s from './header.module.scss'

export const Header = () => {
  const locale = useLocale()

  const { data: userData } = useGetMeQuery()
  const isAuth = !!userData

  const count = 3

  const t = useTranslations('Header')

  return (
    <header className={s.header}>
      <Link className={s.logo} href={'/'}>
        Inctagram
      </Link>
      <div className={s.container}>
        <Select defaultValue={'2'} items={[]} variant={'narrow'} />
        {isAuth && (
          <div className={s.ball}>
            <BellOutline />
            {count > 0 && <div className={s.count}>{count}</div>}
          </div>
        )}
        {!isAuth && (
          <div className={s.buttons}>
            <Button as={Link} href={`/${locale}/signin`} variant={'transparent'}>
              {t('Login')}
            </Button>
            <Button as={Link} href={`/${locale}/signup`} variant={'primary'}>
              {t('SignUp')}
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
