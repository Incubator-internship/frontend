'use client'

import { useState } from 'react'

import Link from 'next/link'

import { Select } from '../shared/ui/select/Select'

export default function Home() {
  const mass = [
    { title: 'Option 1', value: '1' },
    { title: 'Option 2', value: '2' },
    { title: 'Option 3', value: '3' },
    { title: 'Option 4', value: '4' },
    { title: 'Option 5', value: '5' },
  ]
  const fun = (value: string) => {
    console.log(value)
  }

  return (
    <div>
      <main>
        <div>
          {/* <Link href={'/signup'}>Signup</Link>
          <Link href={'/signin'}>Signin</Link>
          <Link href={'/profile'}>Profile</Link> */}
          <Select items={mass} onValueChange={fun} />
        </div>
      </main>
    </div>
  )
}
