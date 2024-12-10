'use client'

import React, { Suspense } from 'react'

import Link from 'next/link'

import { PublicPageModal } from '../shared/ui/publicPageModal/PublicPageModal'

export default function Home() {
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
