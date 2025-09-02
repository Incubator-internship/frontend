import { useToggleAutoPayMutation } from '@/features/payments/api/paymentApi'

export function useToggleAutoPay() {
  const [enableAutoRenew, { isLoading, isSuccess }] = useToggleAutoPayMutation()

  const toggleAutoPay = async (value: boolean) => {
    try {
      return await enableAutoRenew({ enable: value }).unwrap()
    } catch (err) {
      return { error: err }
    }
  }

  return { toggleAutoPay, isLoading, isSuccess }
}
