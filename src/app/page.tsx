'use client'

import { Alert } from '@/shared/ui/alerts'
import { Modal } from '@/shared/ui/modal'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <main>
        <div>
          <Link href={'/signup'}>Signup</Link>
          <Link href={'/signin'}>Signin</Link>
          <Link href={'/profile'}>Profile</Link>
        </div>
      </main>
    </div>
  )
}
