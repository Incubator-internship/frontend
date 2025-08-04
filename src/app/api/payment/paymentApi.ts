import { inctagramApi } from '../inctagramApi'
import { PaymentRequestType } from '@/app/api/payment/paymentApi.types'

export const paymentApi = inctagramApi.injectEndpoints({
  endpoints: builder => ({
    buyPaypal: builder.mutation<any, PaymentRequestType>({
      query: body => ({
        url: '/v1/payments/buyPaypal',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useBuyPaypalMutation } = paymentApi
