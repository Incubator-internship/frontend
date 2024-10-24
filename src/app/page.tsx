'use client'

import Link from 'next/link'

import { Select } from '../shared/ui/select/Select'

export default function Home() {
  const item = [
    { title: 'one', value: '1' },
    { title: 'two', value: '2' },
    { title: 'three', value: '3' },
  ]

  return (
    <div>
      <main>
        <div>
          {/* <Link href={'/signup'}>Signup</Link>
          <Link href={'/signin'}>Signin</Link>
          <Link href={'/profile'}>Profile</Link> */}
          <Select items={item} />
        </div>
      </main>
    </div>
  )
}
