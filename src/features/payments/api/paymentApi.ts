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
    toggleAutoPay: builder.mutation<any, { enable: boolean }>({
      query: body => ({
        url: '/v1/payments/toggleAutoPay',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Payment'],
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
  useToggleAutoPayMutation,
  useGetActiveSubscriptionQuery,
} = paymentApi
