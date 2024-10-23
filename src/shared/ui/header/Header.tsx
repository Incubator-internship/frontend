import Link from 'next/link'

import s from './header.module.scss'

export const Header = () => {
  return (
    <header className={s.header}>
      <Link className={s.logo} href={'/'}>
        Instagram
      </Link>
    </header>
  )
}
