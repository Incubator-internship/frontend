import { ComponentPropsWithoutRef } from 'react'

import s from './button.module.scss'

type Props = {
  fullwidth?: boolean
  variant?: 'primary' | 'secondary' | 'transparent'
} & ComponentPropsWithoutRef<'button'>

export function Button({ className, fullwidth, variant = 'primary', ...rest }: Props) {
  return (
    <button
      className={`${s.button} ${s[variant]} ${fullwidth ? s.fullWidth : ''} ${className}`}
      type={'button'}
      {...rest}
    />
  )
}
