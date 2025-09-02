import s from '@/views/profileSettings/ui/accountManagement/accountManagement.module.scss'
import { RadioGroupBlockPayment, RadioOptionPaymentType } from '@/features/payments'
import {useTranslations} from 'next-intl'


interface AccountManagementProps {
  setIsBusinessAccount: (isBusinessAccount: boolean) => void
  isBusinessAccount: boolean
}

const AccountTypeValue = {
  personal: 'personal',
  business: 'business',
} as const

export const AccountType = ({
  setIsBusinessAccount,
  isBusinessAccount,
}: AccountManagementProps) => {
  const t = useTranslations('AccountManagements')
  const ACCOUNT_OPTIONS: RadioOptionPaymentType[] = [
    {
      label: t('Personal'),
      value: 'personal',
    },
    {
      label: t('Business'),
      value: 'business',
    },
  ]
  const handleAccountTypeChange = (value: string) => {
    setIsBusinessAccount(value === AccountTypeValue.business)
  }

  return (
    <div className={s.block}>
      <RadioGroupBlockPayment title={t('AccountType')}
        options={ACCOUNT_OPTIONS}
        value={isBusinessAccount ? AccountTypeValue.business : AccountTypeValue.personal}
        onChange={handleAccountTypeChange}
      />
    </div>
  )
}
