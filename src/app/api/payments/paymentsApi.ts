import { inctagramApi } from '../inctagramApi'
import { paymentsRequest, paymentsResponse } from './paymentsApi.types'

export const paymentsApi = inctagramApi.injectEndpoints({
  endpoints: builder => ({
    getPayments: builder.query<paymentsResponse[], void>({
      providesTags: ['Payments'],
      query: () => '/v1/payments/myPaymentsYoo',
    }),
    createPayment: builder.mutation<{ redirectUrl: string }, paymentsRequest>({
      query: paymentData => ({
        method: 'POST',
        url: '/v1/payments/buyYoo',
        body: paymentData,
      }),
      invalidatesTags: ['Payments'],
    }),
    cancelPayment: builder.mutation<void, void>({
      query: () => ({
        method: 'POST',
        url: '/v1/payments/cancelYoo',
      }),
      invalidatesTags: ['Payments'],
    }),
  }),
})

export const { useGetPaymentsQuery, useCreatePaymentMutation, useCancelPaymentMutation } =
  paymentsApi
