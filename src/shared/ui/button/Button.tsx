import { ComponentPropsWithoutRef } from 'react'

import s from './button.module.scss'

type Props = {
  border?: boolean
  fullWidth?: boolean
  variant?: 'primary' | 'secondary' | 'transparent'
} & ComponentPropsWithoutRef<'button'>

export function Button({ border, className, fullWidth, variant = 'primary', ...rest }: Props) {
  return (
    <button
      className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className} ${border ? '' : s.border}`}
      type={'button'}
      {...rest}
    />
  )
}
