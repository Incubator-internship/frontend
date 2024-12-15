import { ComponentPropsWithoutRef } from 'react'

import * as RadixScrollArea from '@radix-ui/react-scroll-area'
import clsx from 'clsx'

import s from './scroll.module.scss'

export type itemsArray = {
  title: string
  value: string
}
export type ScrollProps = {
  height: string
  items?: itemsArray[]
  orientation?: 'horizontal' | 'vertical'
  width: string
} & ComponentPropsWithoutRef<typeof RadixScrollArea.Root>

export const Scroll = ({
  children,
  height,
  items,
  orientation = 'vertical',
  width,
  ...rest
}: ScrollProps) => {
  return (
    <RadixScrollArea.Root
      className={clsx(s.root, orientation === 'horizontal' ? s.horizontal : s.vertical)}
      style={{ height, width }}
    >
      <RadixScrollArea.Viewport className={s.viewport}>{children}</RadixScrollArea.Viewport>
      {orientation === 'horizontal' ? (
        <RadixScrollArea.Scrollbar className={s.scrollbar} orientation={'horizontal'}>
          <RadixScrollArea.Thumb className={s.thumb} />
        </RadixScrollArea.Scrollbar>
      ) : (
        <RadixScrollArea.Scrollbar className={s.scrollbar} orientation={'vertical'}>
          <RadixScrollArea.Thumb className={s.thumb} />
        </RadixScrollArea.Scrollbar>
      )}

      <RadixScrollArea.Corner className={s.corner} />
    </RadixScrollArea.Root>
  )
}
