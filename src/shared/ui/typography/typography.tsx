import React, { ComponentPropsWithoutRef, ElementType } from 'react'

import clsx from 'clsx'

import s from './typography.module.scss'

type TypographyProps<T extends ElementType = 'p' | 'span'> = {
  as?: T
  children?: React.ReactNode
  className: string
  variant:
    | 'Body1'
    | 'Body2'
    | 'Caption'
    | 'Link1'
    | 'Link2'
    | 'Overline'
    | 'Subtitle1'
    | 'Subtitle2 '
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(props: TypographyProps<T>) => {
  const { as: Component = 'p', children, className, variant = 'h1', ...rest } = props

  return (
    <Component className={clsx(s[variant], className)} {...rest}>
      {children}
    </Component>
  )
}
