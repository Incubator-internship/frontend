import React, { ChangeEvent, ComponentPropsWithoutRef, useId } from 'react'
import { SubmitHandler, useController, useForm } from 'react-hook-form'

import { Textarea } from '../textarea/Textarea'

type FormValues = {
  textarea: string
}

type TextareaProps = {
  error?: string
  label?: string
  onSubmit?: SubmitHandler<FormValues>
} & ComponentPropsWithoutRef<'textarea'>

export const TextareaWithControl = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, disabled, error, label, onChange, onSubmit, ...restProps }, ref) => {
    const {
      control,
      formState: { errors },
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

    return (
      <div className={className}>
        <Textarea
          {...restProps}
          {...field}
          className={className}
          disabled={disabled}
          error={errors.textarea?.message}
          ref={ref}
        />
      </div>
    )
  }
)
