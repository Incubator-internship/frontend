import { useForm } from 'react-hook-form'

import { PasswordForm } from '@/shared/ui/forms/passwordForm'
import { Header } from '@/shared/ui/header'

type FormValues = {
  newPassword: string
  passwordConfirmation: string
}

export const NewPasswordPage = () => {
  return (
    <div>
      <PasswordForm />
    </div>
  )
}
