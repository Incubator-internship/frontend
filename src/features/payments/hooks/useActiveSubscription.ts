import {useGetActiveSubscriptionQuery} from '@/features/payments/api/paymentApi'
import {FetchBaseQueryError} from '@reduxjs/toolkit/query/react'
import {ActiveSubscriptionType} from '@/features/payments'

export function useActiveSubscription() {
    const {
        data,
        isLoading
    } = useGetActiveSubscriptionQuery()

    return {
        data,
        isLoading,
    }
}
