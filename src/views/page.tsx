import React from 'react'

import { checkAuth } from '@/shared/utils/checkAuth'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import PublicPage from './publicPage/ui/PublicPage'

export default async function Home() {
  const { isAuth, userId } = await checkAuth()
  const locale = cookies().get('NEXT_LOCALE')?.value || 'en'

  if (isAuth) {
    redirect(`/${locale}/profile/${userId}`)
  }

  return <PublicPage />
}
