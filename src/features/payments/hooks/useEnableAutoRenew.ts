import { useEnableAutoRenewMutation } from '@/features/payments/api/paymentApi'

export function useEnableAutoRenew() {
  const [enableAutoRenew, { isLoading, error, data, isSuccess }] = useEnableAutoRenewMutation()

  const enable = async () => {
    try {
      return await enableAutoRenew().unwrap()
    } catch (err) {
      return { error: err }
    }
  }

  return { enable, isLoading, isSuccess }
}
