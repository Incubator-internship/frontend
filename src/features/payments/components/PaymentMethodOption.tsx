import { ComponentPropsWithoutRef, useEffect, useState } from 'react'
import { usePaypalPayment } from '@/features/payments/hooks/usePaypalPayment'
import Loader from '@/shared/ui/loader/Loader'
import s from '@/views/profileSettings/ui/accountManagement/accountManagement.module.scss'
import Image from 'next/image'
import paypal from '@/shared/assets/images/paypal.png'
import { Typography } from '@/shared/ui/typography'
import stripe from '@/shared/assets/images/stripe.png'
import { Modal } from '@/shared/ui/modal'
import { Checkbox } from '@/shared/ui/checkbox'
import { Button } from '@/shared/ui/button'
import { useRouter } from 'next/navigation'

const PAYMENT_IMAGE_SIZE = {
  width: 86,
  height: 54,
} as const
export const PaymentMethodOption = () => {
  const {
    pay,
    isSuccess: isSuccessPaypalPayment,
    data: dataPaypalPayment,
    isLoading: isLoadingPaypalPayment,
  } = usePaypalPayment()

  const [isModal, setIsModal] = useState<boolean>(false)
  const [isChecked, setIsChecked] = useState<boolean>(false)

  const router = useRouter()

  const handlePayment = async () => {
    try {
      await pay({
        value: '2.00',
        description: 'test buy',
        subscriptionTerm: 'month',
      })
      setIsModal(false)
    } catch (error) {
      console.error('Ошибка платежа', error)
    }
  }
  useEffect(() => {
    if (isSuccessPaypalPayment) {
      //@ts-ignore
      router.push(dataPaypalPayment.redirectUrl)
    }
  }, [isSuccessPaypalPayment])

  if (isLoadingPaypalPayment) return <Loader />
  return (
    <div className={s.paymentMethods}>
      <Image
        src={paypal}
        width={PAYMENT_IMAGE_SIZE.width}
        height={PAYMENT_IMAGE_SIZE.height}
        alt={'Paypal icon'}
        onClick={() => setIsModal(true)}
      />
      <Typography as={'span'} variant={'body2'}>
        or
      </Typography>
      <Image
        src={stripe}
        width={PAYMENT_IMAGE_SIZE.width}
        height={PAYMENT_IMAGE_SIZE.height}
        alt={'Stripe icon'}
        onClick={() => setIsModal(true)}
      />
      <Modal isOpen={isModal} title={'Create payments'} onClose={() => setIsModal(false)}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <Typography as={'p'} variant={'body1'}>
            Auto-renewal will be enabled with this payment. You can disable it anytime in your
            profile settings
          </Typography>
          <div className={s.infoPaymentModal}>
            <Checkbox
              label={'I Agree'}
              onCheckedChange={checked => setIsChecked(checked === true)}
            ></Checkbox>
            <Button disabled={!isChecked} onClick={handlePayment}>
              OK
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
