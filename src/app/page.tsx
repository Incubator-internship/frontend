'use client'

import { Alert } from '@/shared/ui/alerts'
import { PasswordForm } from '@/shared/ui/form/passwordForm'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <main>
        <div>
          {/* <Link href={'/signup'}>Signup</Link>
          <Link href={'/signin'}>Signin</Link>
          <Link href={'/profile'}>Profile</Link> */}
          <PasswordForm />
        </div>
      </main>
    </div>
  )
}
