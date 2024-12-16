'use client'

import React from 'react'
import { useSelector } from 'react-redux'

import { selectAuthState } from '@/app/config/store/authSlice'

import ProfilePage from './profile/ui/Profile'
import PublicPage from './publicPage/ui/PublicPage'

export default function Home() {
  const isAuth = useSelector(selectAuthState)

  return (
    <div>
      {isAuth && <ProfilePage />}
      {!isAuth && <PublicPage />}
    </div>
  )
}
