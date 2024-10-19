import { ComponentPropsWithoutRef } from 'react'

import s from './button.module.scss'

type Props = {
  fullWidth?: boolean
  variant?: 'primary' | 'secondary' | 'transparent'
} & ComponentPropsWithoutRef<'button'>

export function Button({ className, fullWidth, variant = 'primary', ...rest }: Props) {
  return (
    <button
      className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
      type={'button'}
      {...rest}
    />
  )
}
