import React, { ChangeEvent, ComponentPropsWithoutRef, useId } from 'react'

import clsx from 'clsx'

import s from './textarea.module.scss'

import { Typography } from '../typography'

type TextareaProps = {
  error?: string
  label?: string
} & ComponentPropsWithoutRef<'textarea'>

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, disabled, error, label, onChange, ...restProps }, ref) => {
    const id = useId()

    const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.(e)
    }

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
        <textarea
          {...restProps}
          className={clsx(s.textarea, error ? s.textareaError : '')}
          disabled={disabled}
          id={id}
          onChange={changeHandler}
          ref={ref}
        />
        {error && (
          <Typography as={'div'} color={'red'} variant={'body2'}>
            {error}
          </Typography>
        )}
      </div>
    )
  }
)
