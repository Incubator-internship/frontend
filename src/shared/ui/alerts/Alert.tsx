import React from 'react'

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
  const { children, className, style, type, ...rest } = props

  return (
    <div className={clsx(s.alert, className)} {...rest}>
      {children}
    </div>
  )
}
