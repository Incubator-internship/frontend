import React, { ChangeEvent, ComponentPropsWithoutRef, useId } from 'react'

import clsx from 'clsx'

import s from './textarea.module.scss'

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
          // use the Typography component when it is created
          <label className={clsx(s.label, disabled ? s.labelDisabled : '')} htmlFor={id}>
            {label}
          </label>
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
          // use the Typography component when it is created
          <div className={s.error}>{error}</div>
        )}
      </div>
    )
  }
)
