import { useGetActiveSubscriptionQuery } from '@/features/payments/api/paymentApi'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react'

export function useActiveSubscription() {
  const { data, error, isLoading } = useGetActiveSubscriptionQuery()

  // @ts-ignore

  const is404 = error && 'status' in error && (error as FetchBaseQueryError).status === 404

  return {
    data,
    isLoading,
    error,
  }
}
