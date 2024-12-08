'use client'

import React from 'react'

import Link from 'next/link'
import { useLocale } from 'next-intl'

export default function Home() {
  const locale = useLocale()

  return (
    <div>
      <Link href={`/${locale}/signup`}>Signup</Link>
      <Link href={`/${locale}/signin`}>Signin</Link>
      <Link href={`/${locale}/profile`}>Profile</Link>
      <Link href={`/${locale}/forgotpassword`}>ForgotPass</Link>
    </div>
  )
}
