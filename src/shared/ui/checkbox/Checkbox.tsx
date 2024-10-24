'use client'

import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef, useId } from 'react'

import { CheckmarkOutlineIcon } from '@/shared/assets/icons'
import { Typography } from '@/shared/ui/typography/Typography'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import s from '@/shared/ui/checkbox/checkbox.module.scss'

export type CheckboxProps = {
  error?: string
  isRequired?: boolean
  label?: ReactNode
} & ComponentPropsWithoutRef<typeof RadixCheckbox.Root>

type CheckboxRef = ElementRef<typeof RadixCheckbox.Root>

export const Checkbox = forwardRef<CheckboxRef, CheckboxProps>((props, ref) => {
  const id = useId()
  const { className, disabled, error, isRequired, label, ...rest } = props

  return (
    <div>
      <div className={s.container}>
        <RadixCheckbox.Root
          className={clsx(s.root, error && s.error, className)}
          disabled={disabled}
          id={id}
          ref={ref}
          {...rest}
        >
          <RadixCheckbox.Indicator className={clsx(s.indicator, disabled && s.disabled)}>
            <CheckmarkOutlineIcon className={clsx(s.icon, disabled && s.disabledIcon)} />
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
        {label && (
          <Typography
            as={'label'}
            className={clsx(s.label, disabled && s.disabled)}
            htmlFor={id}
            variant={'caption'}
          >
            {label}
          </Typography>
        )}
      </div>
      {error && (
        <Typography as={'label'} color={'red'} variant={'caption'}>
          {error}
        </Typography>
      )}
    </div>
  )
})
