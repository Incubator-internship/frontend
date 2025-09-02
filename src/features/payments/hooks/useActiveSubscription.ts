import {useGetActiveSubscriptionQuery} from '@/features/payments/api/paymentApi'
import {FetchBaseQueryError} from '@reduxjs/toolkit/query/react'
import {ActiveSubscriptionType} from '@/features/payments'

export function useActiveSubscription() {
    const {
        data,
        isLoading,
        refetch
    } = useGetActiveSubscriptionQuery()

    let hasActiveSub = false

    if (data && !(data[0] as any).message) {
        hasActiveSub = true
    }

    return {
        data,
        isLoading,
        hasActiveSub,
        refetch
    }
}
