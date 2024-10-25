import * as React from 'react'
import { ForwardedRef } from 'react'

import * as RadixSelect from '@radix-ui/react-select'
import clsx from 'clsx'

import sItem from './selectItem.module.scss'

import { Typography } from '../../typography/Typography'

type languagesType = {
  icon: React.ReactNode
  title: string
  value: string
}

export type SelectItemProps = {
  children: React.ReactNode
  className?: string
  disabled?: boolean
  //icon?: React.ReactNode
  languages?: false | languagesType[]
  value: string
  variant?: string
}

export const SelectItem = React.forwardRef(
  (
    { children, className, disabled, languages, variant, ...rest }: SelectItemProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <RadixSelect.Item
        className={clsx(
          sItem.SelectItem,
          variant === 'narrow' ? sItem.SelectItemVariantNarrow : '',
          className
        )}
        ref={ref}
        {...rest}
      >
        <RadixSelect.ItemText>
          {languages &&
            languages.map((language, index) => (
              <React.Fragment key={index}>
                <Typography as={'span'} className={sItem.SelectItemText} variant={'body1'}>
                  {language.title}
                </Typography>
              </React.Fragment>
            ))}

          {/* {icon && <span className={sItem.SelectItemIconLanguage}>{icon}</span>} */}
          <Typography as={'span'} className={sItem.SelectItemText} variant={'body1'}>
            {children}
          </Typography>
        </RadixSelect.ItemText>
      </RadixSelect.Item>
    )
  }
)
