import s from '@/views/profileSettings/ui/accountManagement/accountManagement.module.scss'
import { FormRadioGroup } from '@/shared/ui/radioGroup'
import { RadioGroupBlockPayment } from '@/features/payments'
import { useTranslations } from 'next-intl'

interface RadioOption {
  label: string
  value: string
}
const SUBSCRIPTION_OPTIONS: RadioOption[] = [
  {
    label: '$10 per 1 Day',
    value: '$10 per 1 Day',
  },
  {
    label: '$50 per 7 Day',
    value: '$50 per 7 Day',
  },
  {
    label: '$100 per month',
    value: '$100 per month',
  },
]
export const SubscriptionCosts = () => {
  const t = useTranslations('AccountManagements')
  return (
    <div className={s.block}>
      <RadioGroupBlockPayment
        title={t('YourSubCosts')}
        options={SUBSCRIPTION_OPTIONS}
        defaultValue={'$10 per 1 Day'}
      />
    </div>
  )
}
