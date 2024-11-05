'use client'

import { TextareaWithControl } from '@/shared/ui/textareaWithControl'
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
