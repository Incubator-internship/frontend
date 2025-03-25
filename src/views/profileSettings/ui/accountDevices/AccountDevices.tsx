import { ComponentPropsWithoutRef } from 'react'

import { clsx } from 'clsx'

import s from './accountDevices.module.scss'

type Props = {} & ComponentPropsWithoutRef<'div'>

export const AccountDevices = ({ className, ...rest }: Props) => {
  return <div className={clsx(className)}>Devices Content</div>
}
