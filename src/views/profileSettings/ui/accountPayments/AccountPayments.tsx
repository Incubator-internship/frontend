import { ComponentPropsWithoutRef } from 'react'

import { clsx } from 'clsx'

import s from './accountPayments.module.scss'

type Props = {} & ComponentPropsWithoutRef<'div'>

export const AccountPayments = ({ className, ...rest }: Props) => {
  return <div className={clsx(className)}>My payments Content</div>
}
