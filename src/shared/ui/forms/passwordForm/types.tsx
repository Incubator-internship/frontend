import { Control, FieldErrors } from 'react-hook-form'

import { FormValues } from '../passwordForm'
export interface ApiError {
  errorMessages?: ErrorMessage[]
  message?: string
  status: number
}

export interface ErrorMessage {
  field: string
  message: string
}

export interface PasswordFormItemProps {
  control: Control<FormValues>
  errors: FieldErrors<FormValues>
}
