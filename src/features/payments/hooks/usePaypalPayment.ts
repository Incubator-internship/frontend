import { useBuyPaypalMutation } from '@/features/payments/api/paymentApi'
import { PaymentRequestType } from '@/features/payments/api/paymentApi.types'

export function usePaypalPayment() {
  const [buyPaypal, { isLoading, error, data, isSuccess }] = useBuyPaypalMutation()

  const pay = async (paymentData: PaymentRequestType) => {
    try {
      return await buyPaypal(paymentData).unwrap() // возвращаем ответ дальше
    } catch (err) {
      return { error: err }
    }
  }

  return {
    pay,
    isLoading,
    error,
    data,
    isSuccess,
  }
}
