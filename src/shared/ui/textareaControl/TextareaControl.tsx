import React, { ChangeEvent, ComponentPropsWithRef, ComponentPropsWithoutRef, useId } from 'react'
import { SubmitHandler, useController, useForm } from 'react-hook-form'

import clsx from 'clsx'

import s from '@/shared/ui/textarea/textarea.module.scss'

import { Textarea } from '../textarea/Textarea'
import { Typography } from '../typography'

type FormValues = {
  textarea: string
}

type TextareaProps = {
  error?: string
  label?: string
  onSubmit?: SubmitHandler<FormValues>
} & ComponentPropsWithRef<'textarea'>

export const TextareaWithControl = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, disabled, error, label, onChange, onSubmit, ...restProps }, ref) => {
    const {
      control,
      formState: { errors },
    } = useForm<FormValues>()
    const id = useId()
    const { field } = useController({
      control,
      name: 'textarea',
      rules: {
        minLength: { message: 'Error text: Minimum length should be 10 characters', value: 10 },
        required: 'The field message is required',
      },
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
          error={errors.textarea?.message}
          ref={ref}
        />
      </>
    )
  }
)
