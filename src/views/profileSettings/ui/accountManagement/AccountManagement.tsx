import { ComponentPropsWithoutRef, useEffect, useState } from 'react'

import { useGetMeQuery } from '@/app/api/auth/authApi'
import { MeData } from '@/app/api/auth/authApi.types'
import {
  AccountType,
  CurrentSubscription,
  PaymentConfirmationModals,
  PaymentMethodOption,
  SubscriptionCosts,
  useActiveSubscription,
  useGetSubscriptionDetailsQuery,
} from '@/features/payments'
import Loader from '@/shared/ui/loader/Loader'
import { clsx } from 'clsx'

import s from './accountManagement.module.scss'
type Props = {} & ComponentPropsWithoutRef<'div'>
export const AccountManagement = ({ className, ...rest }: Props) => {
  // @ts-ignore
  const { data: meData, isLoading: isLoadingMeData } = useGetMeQuery<MeData>()
  const { data: activeSubData } = useActiveSubscription()
  const isLoadingActiveSub = !activeSubData

  const [isBusinessAccount, setIsBusinessAccount] = useState<boolean>(
    meData?.accountType === 'Business'
  )
  const { data: subscriptionDetails, isLoading: isLoadingDetails } =
    useGetSubscriptionDetailsQuery()

  useEffect(() => {
    if (meData) {
      setIsBusinessAccount(meData.accountType === 'Business')
    }
  }, [meData])

  const isLoadingOverall = isLoadingMeData || isLoadingActiveSub || isLoadingDetails

  if (isLoadingOverall) {
    return (
      <div className={clsx(s.profileManagement, className)}>
        <Loader />
      </div>
    )
  }

  return (
    <div className={clsx(s.profileManagement, className)}>
      {!isLoadingActiveSub && meData && <CurrentSubscription />}
      {!isLoadingMeData && (
        <AccountType
          isBusinessAccount={isBusinessAccount}
          setIsBusinessAccount={setIsBusinessAccount}
        />
      )}
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
