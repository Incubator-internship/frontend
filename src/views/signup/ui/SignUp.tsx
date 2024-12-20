'use client'

import { useState } from 'react'

import { useRegistrationMutation } from '@/app/api/auth/authApi'
import { Button } from '@/shared/ui/button'
import { SignUpForm, SignUpFormValues, SignUpResponse } from '@/shared/ui/forms/signUp'
import { Modal } from '@/shared/ui/modal'
import { useTranslations } from 'next-intl'

import s from './signUp.module.scss'

export default function SignUp() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [userEmail, setUserEmail] = useState<string>('')
  const [signUp] = useRegistrationMutation()

  const t = useTranslations('SignUpPage')

  const onSubmit = async (data: Omit<SignUpFormValues, 'confirmPassword'>) => {
    const result = await signUp({
      email: data.email,
      password: data.password,
      userName: data.username,
    })

    if (!result.error) {
      setIsOpenModal(true)
      setUserEmail(data.email)
    } else {
      console.log(result.error)
    }

    return result as SignUpResponse
  }

  return (
    <div className={s.page}>
      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} title={t('ModalTitle')}>
        <div>
          {t('ModalText')} {userEmail}
        </div>
        <Button onClick={() => setIsOpenModal(false)}>{t('ModalBtn')}</Button>
      </Modal>
      <SignUpForm onSubmit={onSubmit} />
    </div>
  )
}
