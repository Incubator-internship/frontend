import React from 'react'

import Close from '@/shared/assets/icons/Close'

import s from './modal.module.scss'

import { Typography } from '../typography'

export type ModalProps = {
  children?: React.ReactNode
  isOpen?: boolean
  onClose?: () => void
  title?: string
}

export const Modal = ({ children, isOpen = true, onClose, title }: ModalProps) => {
  if (!isOpen) {
    return null
  }

  return (
    <div className={s.modal}>
      <div className={s.head}>
        <Typography as={'h2'}>{title}</Typography>
        <button onClick={onClose} type={'button'}>
          <Close className={s.close}></Close>
        </button>
      </div>
      <div className={s.body}>{children}</div>
    </div>
  )
}
