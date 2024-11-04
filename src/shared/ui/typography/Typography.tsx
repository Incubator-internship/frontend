import React, { ComponentPropsWithoutRef, ElementType } from 'react'

import clsx from 'clsx'

import s from './typography.module.scss'

//fix name component

export type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  children?: React.ReactNode
  className?: string
  color?: 'black' | 'danger' | 'grey' | 'link' | 'red'
  variant?:
    | 'body1'
    | 'body2'
    | 'boldText14'
    | 'boldText16'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'large'
    | 'link1'
    | 'link2'
    | 'mediumText14'
    | 'overline'
    | 'regularLink'
    | 'regularText16'
    | 'semiBoldSmallText'
    | 'smallLink'
    | 'smallText'
    | 'subtitle1'
    | 'subtitle2'
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(props: TypographyProps<T>) => {
  const {
    as: Component = 'p',
    children,
    className,
    color = 'white',
    variant = 'h1',
    ...rest
  } = props

  return (
    <Component className={clsx(s[variant], s[color], className)} {...rest}>
      {children}
    </Component>
  )
}
