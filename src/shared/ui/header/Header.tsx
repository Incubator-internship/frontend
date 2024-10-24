import { Button } from '@/shared/ui/button'
import Link from 'next/link'

import s from './header.module.scss'

type Props = {
  isAuth: boolean
}

export const Header = ({ isAuth = false }: Props) => {
  return (
    <header className={s.header}>
      <Link className={s.logo} href={'/'}>
        Instagram
      </Link>
      <div className={s.container}>
        {isAuth && <p>Notification</p>}
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
