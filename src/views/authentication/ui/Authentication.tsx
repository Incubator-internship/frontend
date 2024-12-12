'use client'

import { useEffect } from 'react'

import { useRouter, useSearchParams } from 'next/navigation'

export default function Authentication() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams?.get('accessToken')

  useEffect(() => {
    if (token) {
      localStorage.setItem('accessToken', token)
      router.push('/profile')
    }
  }, [router, token])

  return <div>Loading...</div>
}
