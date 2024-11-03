import React from 'react'

import Close from '@/shared/assets/icons/Close'

import s from './modal.module.scss'

import { Button } from '../button'
import { Typography } from '../typography'

export type ModalProps = {
  isOpen?: boolean
  message?: string
  onClose?: () => void
  title?: string
}

export const Modal = ({ isOpen = true, message, onClose, title }: ModalProps) => {
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
      <div className={s.body}>
        <Typography as={'p'} className={s.text}>
          {message}
        </Typography>
        <Button className={s.button} onClick={onClose}>
          OK
        </Button>
      </div>
    </div>
  )
}
