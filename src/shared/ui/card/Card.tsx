import { ReactNode } from 'react'

import s from './card.module.scss'

type Props = {
  children?: ReactNode
}

export const Card = ({ children, ...rest }: Props) => {
  return (
    <div className={s.card} {...rest}>
      {children}
    </div>
  )
}
