import React, { ChangeEvent, ComponentPropsWithoutRef, ReactNode, useId, useState } from 'react'

import Close from '@/shared/assets/icons/Close'
import Eye from '@/shared/assets/icons/Eye'
import EyeClose from '@/shared/assets/icons/EyeClose'
import Search from '@/shared/assets/icons/Search'
import { Typography } from '@/shared/ui/typography'
import clsx from 'clsx'

import s from './input.module.scss'

export type TextFieldProps = {
  error?: ReactNode
  label?: string
  onReset?: () => void
  variant?: 'normal' | 'password' | 'search'
} & ComponentPropsWithoutRef<'input'>

export const Input = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      disabled,
      error,
      label,
      onChange,
      onReset,
      value,
      variant = 'normal',
      ...restProps
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(false)
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
    }
    const id = useId()

    return (
      <div className={className}>
        {label && (
          <Typography
            as={'label'}
            className={clsx(s.label, disabled ? s.labelDisabled : '')}
            htmlFor={id}
            variant={'body2'}
          >
            {label}
          </Typography>
        )}
        <div className={clsx(s.inputWrapper, s[variant], error ? s.inputError : '')}>
          {variant === 'search' && (
            <button className={clsx(s.icon, s.iconSearch)} type={'button'}>
              <Search />
            </button>
          )}
          <input
            autoComplete={'off'}
            className={s.input}
            disabled={disabled}
            id={id}
            onChange={changeHandler}
            ref={ref}
            type={variant === 'password' && !isVisible ? 'password' : 'text'}
            value={value}
            {...restProps}
          />
          {variant === 'password' && (
            <button className={s.icon} onClick={() => setIsVisible(!isVisible)} type={'button'}>
              {isVisible ? <Eye /> : <EyeClose />}
            </button>
          )}
          {onReset && !!value && (
            <button className={s.icon} onClick={onReset} type={'button'}>
              <Close />
            </button>
          )}
        </div>
        {error && (
          <Typography as={'span'} className={s.error} variant={'body2'}>
            {error}
          </Typography>
        )}
      </div>
    )
  }
)
