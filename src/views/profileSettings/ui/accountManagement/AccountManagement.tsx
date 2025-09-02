import { ComponentPropsWithoutRef, useEffect, useState } from 'react'

import { clsx } from 'clsx'
import { useGetMeQuery } from '@/app/api/auth/authApi'
import { MeData } from '@/app/api/auth/authApi.types'
import {
  AccountType,
  CurrentSubscription,
  PaymentConfirmationModals,
  PaymentMethodOption,
  SubscriptionCosts,
  useActiveSubscription,
} from '@/features/payments'
import Loader from '@/shared/ui/loader/Loader'
import s from './accountManagement.module.scss'
type Props = {} & ComponentPropsWithoutRef<'div'>
export const AccountManagement = ({ className, ...rest }: Props) => {
  const {
    data: meData,
    isLoading: isLoadingMeData
  } = useGetMeQuery()
  const user: MeData | undefined = meData
  const {
    hasActiveSub,
    isLoading: isLoadingSub
  } = useActiveSubscription()

  const [isBusinessAccount, setIsBusinessAccount] = useState<boolean>(
      user?.accountType === 'Business' && hasActiveSub
  )

  useEffect(() => {
    if (meData) {
      setIsBusinessAccount(user?.accountType === 'Business' && hasActiveSub)
    }
  }, [meData, hasActiveSub])

  const isLoadingOverall = isLoadingMeData || isLoadingSub

  if (isLoadingOverall) {
    return (
      <div className={clsx(s.loaderPayments, className)}>
        <Loader />
      </div>
    )
  }
  return (
    <div className={clsx(s.profileManagement, className)}>
      {hasActiveSub && isBusinessAccount && <CurrentSubscription/>}
        <AccountType
          isBusinessAccount={isBusinessAccount}
          setIsBusinessAccount={setIsBusinessAccount}
        />
      {isBusinessAccount && (
        <>
          <SubscriptionCosts />
          <PaymentMethodOption />
        </>
      )}
      <PaymentConfirmationModals />
    </div>
  )
}
