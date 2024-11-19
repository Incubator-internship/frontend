'use client'

import { SignUpForm } from '@/shared/ui/forms/signUp'

import s from './signUp.module.scss'

export default function SignUp() {
  const onSubmit = () => {}

  return (
    <div className={s.page}>
      <SignUpForm onSubmit={onSubmit} />
    </div>
  )
}
