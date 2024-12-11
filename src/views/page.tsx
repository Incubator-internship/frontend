'use client'

import React from 'react'

import Link from 'next/link'
import { useLocale } from 'next-intl'

import { PublicPageModal } from '../shared/ui/publicPageModal/PublicPageModal'

export default function Home() {
  const locale = useLocale()

  return (
    <div>
      <Link href={'/signup'}>Signup</Link>
      <Link href={'/signin'}>Signin</Link>
      <Link href={'/profile'}>Profile</Link>
      <Link href={'/forgotpassword'}>ForgotPass</Link>
      <PublicPageModal />
    </div>
  )
}
