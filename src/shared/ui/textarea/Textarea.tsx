import React, { ChangeEvent, ComponentPropsWithoutRef, useId } from 'react'
import { SubmitHandler, useController, useForm } from 'react-hook-form'

import { Typography } from '@/shared/ui/typography'
import clsx from 'clsx'

import s from './textarea.module.scss'

type FormValues = {
  textarea: string
}

type TextareaProps = {
  error?: string
  label?: string
  onSubmit?: SubmitHandler<FormValues>
} & ComponentPropsWithoutRef<'textarea'>

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, disabled, error, label, onChange, onSubmit, ...restProps }, ref) => {
    const id = useId()

    const {
      control,
      formState: { errors },
      handleSubmit,
    } = useForm<FormValues>({
      mode: 'all',
    })

    const { field } = useController({
      control,
      name: 'textarea',
      rules: {
        minLength: { message: 'Error text: Minimum length should be 10 characters', value: 10 },
        required: 'The field message is required',
      },
    })

    const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      field.onChange(e)
      onChange?.(e)
    }

    return (
      <form className={className} onSubmit={onSubmit ? handleSubmit(onSubmit) : undefined}>
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
          {...field}
          className={clsx(s.textarea, error || errors.textarea ? s.textareaError : '')}
          disabled={disabled}
          id={id}
          onChange={changeHandler}
          ref={ref}
        />
        {(error || errors.textarea) && (
          <Typography as={'div'} className={s.error} variant={'body2'}>
            {errors.textarea?.message}
          </Typography>
        )}
      </form>
    )
  }
)
