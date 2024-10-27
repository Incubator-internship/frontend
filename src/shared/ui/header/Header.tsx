import BellOutline from '@/shared/assets/icons/BellOutline'
import { Button } from '@/shared/ui/button'
import Link from 'next/link'

import s from './header.module.scss'

type Props = {
  count: number
  isAuth: boolean
}

export const Header = ({ count, isAuth = false }: Props) => {
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
        {/*  Language select*/}
      </div>
    </header>
  )
}
