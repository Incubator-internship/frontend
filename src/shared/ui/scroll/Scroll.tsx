import * as RadixScrollArea from '@radix-ui/react-scroll-area'
import clsx from 'clsx'

import s from './scroll.module.scss'

import { Typography } from '../typography'
import { ComponentPropsWithoutRef } from 'react'
import { Root } from '@radix-ui/react-radio-group'

export type itemsArray = {
  title: string
  value: string
}
export type ScrollProps = {
  height: string
  items: itemsArray[]
  orientation?: 'horizontal' | 'vertical'
  width: string
} & ComponentPropsWithoutRef<typeof Root>

export const Scroll = ({ children, height, items, orientation = 'vertical', width, ...rest }: ScrollProps) => {
  return (
    <RadixScrollArea.Root
      className={clsx(s.Root, orientation === 'horizontal' ? s.horizontal : s.vertical)}
      style={{ height, width }}
    >
      <RadixScrollArea.Viewport className={s.Viewport}>
        {children}
      </RadixScrollArea.Viewport>
      {orientation === 'horizontal' ? (
        <RadixScrollArea.Scrollbar className={s.Scrollbar} orientation={'horizontal'}>
          <RadixScrollArea.Thumb className={s.Thumb} />
        </RadixScrollArea.Scrollbar>
      ) : (
        <RadixScrollArea.Scrollbar className={s.Scrollbar} orientation={'vertical'}>
          <RadixScrollArea.Thumb className={s.Thumb} />
        </RadixScrollArea.Scrollbar>
      )}

      <RadixScrollArea.Corner className={s.Corner} />
    </RadixScrollArea.Root>
  )
}
