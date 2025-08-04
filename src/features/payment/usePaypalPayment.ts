import { useBuyPaypalMutation } from '@/app/api/payment/paymentApi'
import { PaymentRequestType } from '@/app/api/payment/paymentApi.types'

export function usePaypalPayment() {
  const [buyPaypal, { isLoading, error, data }] = useBuyPaypalMutation()

  const pay = async (paymentData: PaymentRequestType) => {
    try {
      return await buyPaypal(paymentData).unwrap() // возвращаем ответ дальше
    } catch (err) {
      return { error: err }
    }
  }

  return { pay, isLoading, error, data }
}
