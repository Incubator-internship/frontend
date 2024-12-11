import BellOutline from '@/shared/assets/icons/BellOutline'
import { Button } from '@/shared/ui/button'
import { Select } from '@/shared/ui/select'
import Link from 'next/link'
import { useLocale } from 'next-intl'

import s from './header.module.scss'

type Props = {
  count: number
  isAuth: boolean
}

export const Header = ({ count, isAuth }: Props) => {
  const locale = useLocale()

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
            <Button as={Link} href={`/${locale}/signin`} variant={'transparent'}>
              Log in
            </Button>
            <Button as={Link} href={`/${locale}/signup`} variant={'primary'}>
              Sign up
            </Button>
          </div>
        )}
        <Select defaultValue={'2'} items={[]} variant={'narrow'} />
      </div>
    </header>
  )
}
