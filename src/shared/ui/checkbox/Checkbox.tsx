'use client'

import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { CheckmarkOutlineIcon } from '@/shared/ui/icons'
import { Typography } from '@/shared/ui/typography/typography'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import s from '@/shared/ui/checkbox/Checkbox.module.scss'

export type CheckboxProps = {
  error?: string
  isRequired?: boolean
  label?: ReactNode
} & ComponentPropsWithoutRef<typeof RadixCheckbox.Root>

type CheckboxRef = ElementRef<typeof RadixCheckbox.Root>

export const Checkbox = forwardRef<CheckboxRef, CheckboxProps>((props, ref) => {
  const { className, disabled, error, isRequired, label, ...rest } = props

  return (
    <div>
      <div className={s.container}>
        <RadixCheckbox.Root
          className={clsx(s.root, error && s.error, className)}
          disabled={disabled}
          ref={ref}
          {...rest}
        >
          <RadixCheckbox.Indicator className={clsx(s.indicator, disabled && s.disabled)}>
            <CheckmarkOutlineIcon className={clsx(s.icon, disabled && s.disabledIcon)} />
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
        {label && (
          <Typography
            as={'span'}
            className={clsx(s.label, disabled && s.disabled)}
            variant={'caption'}
          >
            {label}
          </Typography>
        )}
      </div>
      {error && (
        //TODO:  variant 'error'
        <Typography as={'span'} variant={'caption'}>
          {error}
        </Typography>
      )}
    </div>
  )
})
