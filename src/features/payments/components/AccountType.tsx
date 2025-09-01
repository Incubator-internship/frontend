import s from '@/views/profileSettings/ui/accountManagement/accountManagement.module.scss'
import { RadioGroupBlockPayment, RadioOptionPaymentType } from '@/features/payments'

const ACCOUNT_OPTIONS: RadioOptionPaymentType[] = [
  {
    label: 'Personal',
    value: 'personal',
  },
  {
    label: 'Business',
    value: 'business',
  },
]

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
  const handleAccountTypeChange = (value: string) => {
    setIsBusinessAccount(value === AccountTypeValue.business)
  }

  return (
    <div className={s.block}>
      <RadioGroupBlockPayment
        title={'Account type:'}
        options={ACCOUNT_OPTIONS}
        value={isBusinessAccount ? AccountTypeValue.business : AccountTypeValue.personal}
        onChange={handleAccountTypeChange}
      />
    </div>
  )
}
