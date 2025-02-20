import React, { ComponentPropsWithRef, useId } from 'react'
import { Control, useController } from 'react-hook-form'

import clsx from 'clsx'

import s from './../textarea/textarea.module.scss'

import { Textarea } from '../textarea/Textarea'
import { Typography } from '../typography'

type FormValues = {
  description: string
}

type TextareaWithControlProps = {
  control: Control<FormValues>
  label?: string
  name: string
} & ComponentPropsWithRef<'textarea'>

export const TextareaWithControl = React.forwardRef<HTMLTextAreaElement, TextareaWithControlProps>(
  ({ className, control, disabled, label, name, ...restProps }, ref) => {
    const id = useId()
    const {
      field,
      fieldState: { error },
    } = useController({
      control,
      name,
    })

    return (
      <>
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
        <Textarea
          {...restProps}
          {...field}
          className={className}
          disabled={disabled}
          id={id}
          ref={ref}
        />
        {error && (
          <Typography color={'red'} variant={'body2'}>
            {error.message}
          </Typography>
        )}
      </>
    )
  }
)
