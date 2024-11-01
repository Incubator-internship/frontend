import * as React from 'react'
import { ForwardedRef } from 'react'

import * as RadixSelect from '@radix-ui/react-select'
import clsx from 'clsx'

import sItem from './selectItem.module.scss'

import { Typography } from '../../typography/Typography'

export type SelectItemProps = {
  children: React.ReactNode
  className?: string
  disabled?: boolean
  icon?: React.ReactNode
  value: string
  variant?: string
}

export const SelectItem = React.forwardRef(
  (
    { children, className, disabled, icon, variant, ...rest }: SelectItemProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <RadixSelect.Item
        className={clsx(
          sItem.selectItem,
          variant === 'narrow' ? sItem.selectItemVariantNarrow : '',
          className
        )}
        ref={ref}
        {...rest}
      >
        <RadixSelect.ItemText>
          <Typography as={'span'} className={sItem.selectItemText} variant={'body1'}>
            {children}
          </Typography>
        </RadixSelect.ItemText>
      </RadixSelect.Item>
    )
  }
)
