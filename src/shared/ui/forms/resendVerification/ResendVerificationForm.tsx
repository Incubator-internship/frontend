import { useForm } from 'react-hook-form'

import { emailSchema } from '@/shared/model/schemas/schemas'
import { Button } from '@/shared/ui/button'
import { InputControl } from '@/shared/ui/inputControl'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './resendVerificationForm.module.scss'

const resendVerificationFormSchema = z.object({
  email: emailSchema,
})

export type ResendVerificationFormValues = z.infer<typeof resendVerificationFormSchema>

type Props = {
  onSubmit: (data: Omit<ResendVerificationFormValues, 'confirmPassword'>) => void
}

export const ResendVerificationForm = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { isDirty, isValid },
    handleSubmit,
    reset,
  } = useForm<ResendVerificationFormValues>({
    defaultValues: {
      email: '',
    },
    mode: 'onBlur',
    resolver: zodResolver(resendVerificationFormSchema),
  })

  const onSubmitForm = handleSubmit(data => {
    onSubmit({
      email: data.email,
    })
    reset()
  })

  return (
    <>
      <form className={s.form} onSubmit={onSubmitForm}>
        <InputControl className={s.input} control={control} label={'Email'} name={'email'} />
        <Button className={s.button} disabled={!isDirty || !isValid} fullWidth type={'submit'}>
          Resend verification link
        </Button>
      </form>
    </>
  )
}
