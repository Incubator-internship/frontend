import React, { useState } from 'react'

import Close from '@/shared/assets/icons/Close'
import clsx from 'clsx'

import s from './alert.module.scss'

type AlertProps = {
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
  title?: string
  type?: 'error' | 'success'
}

export const Alert = (props: AlertProps) => {
  const { children, className, type = 'success', ...rest } = props

  return (
    <div className={clsx(s.alert, type && s[type], className)} {...rest}>
      <p>{children ? children : rest.title}</p>
      <button type={'button'}>
        <Close className={clsx(s.close, className)}></Close>
      </button>
    </div>
  )
}
