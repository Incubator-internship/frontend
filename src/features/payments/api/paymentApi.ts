import { inctagramApi } from '@/app/api/inctagramApi'
import { ActiveSubscriptionType, PaymentRequestType, SubscriptionDetail } from '@/features/payments'

export const paymentApi = inctagramApi.injectEndpoints({
  endpoints: builder => ({
    buyPaypal: builder.mutation<any, PaymentRequestType>({
      query: body => ({
        url: '/v1/payments/buyPaypal',
        method: 'POST',
        body,
      }),
    }),
    cancelPaypal: builder.mutation<any, void>({
      query: () => ({
        url: '/v1/payments/cancelPaypal',
        method: 'POST',
      }),
    }),
    enableAutoRenew: builder.mutation<any, void>({
      query: () => ({
        url: '/v1/payments/auto-renew/enable',
        method: 'POST',
      }),
    }),
    getActiveSubscription: builder.query<ActiveSubscriptionType[], void>({
      query: () => ({
        url: '/v1/payments/paypal/activeSubscription',
        method: 'GET',
        providesTags: ['Payment'],
      }),
    }),
    getSubscriptionDetails: builder.query<SubscriptionDetail, void>({
      query: () => 'subscription/details',
    }),
  }),
})

export const {
  useBuyPaypalMutation,
  useCancelPaypalMutation,
  useGetActiveSubscriptionQuery,
  useEnableAutoRenewMutation,
  useGetSubscriptionDetailsQuery,
} = paymentApi
