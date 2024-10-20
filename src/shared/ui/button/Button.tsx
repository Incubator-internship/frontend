import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './button.module.scss'

type Props<T extends ElementType = 'button'> = {
  as?: T
  border?: boolean
  fullWidth?: boolean
  variant?: 'primary' | 'secondary' | 'transparent'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: Props<T>) => {
  const {
    as: Component = 'button',
    border,
    className,
    fullWidth,
    variant = 'primary',
    ...rest
  } = props

  return (
    <Component
      className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className} ${border ? '' : s.border}`}
      type={'button'}
      {...rest}
    />
  )
}
