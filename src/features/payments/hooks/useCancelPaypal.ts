import { useCancelPaypalMutation } from '@/features/payments/api/paymentApi'

export function useCancelPaypal() {
  const [cancelPaypal, { isLoading, error, data, isSuccess }] = useCancelPaypalMutation()

  const cancel = async () => {
    try {
      return await cancelPaypal().unwrap()
    } catch (err) {
      return { error: err }
    }
  }

  return {
    cancel,
    isLoading,
    error,
    data,
    isSuccess,
  }
}
