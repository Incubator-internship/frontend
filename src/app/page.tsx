'use client'

import { Alert } from '@/shared/ui/alerts'
import { Textarea } from '@/shared/ui/textarea'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <main>
        <div>
          <Link href={'/signup'}>Signup</Link>
          <Link href={'/signin'}>Signin</Link>
          <Link href={'/profile'}>Profile</Link>
          <div style={{ margin: '0 auto', maxWidth: '560px' }}>
            <Textarea />
          </div>
        </div>
      </main>
    </div>
  )
}
