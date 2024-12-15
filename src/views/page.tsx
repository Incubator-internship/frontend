'use client'

import React, { useState } from 'react'

import { Scroll } from '@/shared/ui/scroll'
import Link from 'next/link'
import { useLocale } from 'next-intl'

import { PublicPageModal } from '../shared/ui/publicPageModal/PublicPageModal'

export default function Home() {
  const locale = useLocale()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div>
      <Link href={'/signup'}>Signup</Link>
      <Link href={'/signin'}>Signin</Link>
      <Link href={'/profile'}>Profile</Link>
      <Link href={'/forgotpassword'}>ForgotPass</Link>
      <button onClick={openModal} type={'button'}>
        Open Public Page Modal
      </button>
      <PublicPageModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}
