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
          <Modal
            message={'We have sent a link to confirm your email to epam@epam.com'}
            title={'Email sent'}
          ></Modal>
        </div>
      </main>
    </div>
  )
}
