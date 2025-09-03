import React, { ComponentPropsWithRef, useId } from 'react'
import { Control, FieldValues, Path, useController } from 'react-hook-form'

import clsx from 'clsx'

import s from './../textarea/textarea.module.scss'

import { Textarea } from '../textarea/Textarea'
import { Typography } from '../typography'

type TextareaWithControlProps<
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>,
> = {
  control: Control<TFieldValues>
  label?: string
  name: TName
} & ComponentPropsWithRef<'textarea'>

function TextareaWithControlInner<
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>,
>(
  {
    className,
    control,
    disabled,
    label,
    name,
    ...restProps
  }: TextareaWithControlProps<TFieldValues, TName>,
  ref: React.Ref<HTMLTextAreaElement>
) {
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

export const TextareaWithControl = React.forwardRef(TextareaWithControlInner) as <
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>,
>(
  props: { ref?: React.Ref<HTMLTextAreaElement> } & TextareaWithControlProps<TFieldValues, TName>
) => React.ReactElement
