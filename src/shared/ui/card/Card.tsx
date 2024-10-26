import { ComponentPropsWithoutRef, ReactNode } from 'react'

import clsx from 'clsx'

import s from './card.module.scss'

type Props = {
  children?: ReactNode
  className?: string
} & ComponentPropsWithoutRef<'div'>

export const Card = ({ children, className, ...rest }: Props) => {
  return (
    <div className={(clsx(s.card), className)} {...rest}>
      {children}
    </div>
  )
}
