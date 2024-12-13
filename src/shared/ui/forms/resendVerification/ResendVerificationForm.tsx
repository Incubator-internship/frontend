import { useForm } from 'react-hook-form'

import { createEmailSchema } from '@/shared/model/schemas/schemas'
import { Button } from '@/shared/ui/button'
import { InputControl } from '@/shared/ui/inputControl'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { z } from 'zod'

import s from './resendVerificationForm.module.scss'

const createResendVerificationFormSchema = (t: (key: string) => string) =>
  z.object({
    email: createEmailSchema(t),
  })

export type ResendVerificationFormValues = z.infer<
  ReturnType<typeof createResendVerificationFormSchema>
>

type Props = {
  onSubmit: (data: ResendVerificationFormValues) => void
}

export const ResendVerificationForm = ({ onSubmit }: Props) => {
  const t = useTranslations('ConfirmEmailPage')
  const tError = useTranslations('FormsErrors')

  const resendVerificationFormSchema = createResendVerificationFormSchema(tError)

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
        <InputControl
          className={s.input}
          control={control}
          label={t('EmailInput')}
          name={'email'}
        />
        <Button className={s.button} disabled={!isDirty || !isValid} fullWidth type={'submit'}>
          {t('FormBtn')}
        </Button>
      </form>
    </>
  )
}
