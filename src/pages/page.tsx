'use client'

import Link from 'next/link'

import { NewPasswordPage } from './newPasswordPage/ui/page'

export default function Home() {
  return (
    <div>
      {/* <Link href={'/signup'}>Signup</Link>
      <Link href={'/signin'}>Signin</Link>
      <Link href={'/profile'}>Profile</Link> */}
      <NewPasswordPage />
    </div>
  )
}
