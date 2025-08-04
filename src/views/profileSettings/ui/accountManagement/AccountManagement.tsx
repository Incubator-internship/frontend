import { ComponentPropsWithoutRef, FormEvent, useState } from 'react'

import paypal from '@/shared/assets/images/paypal.png'
import stripe from '@/shared/assets/images/stripe.png'
import { Button } from '@/shared/ui/button'
import { Checkbox } from '@/shared/ui/checkbox'
import { Modal } from '@/shared/ui/modal'
import { FormRadioGroup } from '@/shared/ui/radioGroup'
import { Typography } from '@/shared/ui/typography'
import { clsx } from 'clsx'
import Image from 'next/image'

import s from './accountManagement.module.scss'
import { usePaypalPayment } from '@/features/payment/usePaypalPayment'

type Props = {} & ComponentPropsWithoutRef<'div'>

const AccountTypeValue = {
  personal: 'personal',
  business: 'business',
} as const

interface RadioOption {
  label: string
  value: string
}

interface RadioGroupBlockProps {
  title: string
  options: RadioOption[]
  defaultValue: string
  onChange?: (value: string) => void
}

const RadioGroupBlock = ({ title, options, defaultValue, onChange }: RadioGroupBlockProps) => {
  const handleRadioChange = (value: string | FormEvent<HTMLDivElement>) => {
    if (typeof value === 'string') {
      onChange?.(value)
    }
  }

  return (
    <div className={s.block}>
      <Typography as={'label'} className={s.radioTitle} variant={'h3'}>
        {title}
      </Typography>
      <div className={s.radioGroupWrapp}>
        <FormRadioGroup
          onChange={handleRadioChange}
          className={s.radioGroup}
          defaultValue={defaultValue}
          options={options}
          orientation={'vertical'}
        />
      </div>
    </div>
  )
}

const ACCOUNT_OPTIONS: RadioOption[] = [
  {
    label: 'Personal',
    value: 'personal',
  },
  {
    label: 'Business',
    value: 'business',
  },
]

const SUBSCRIPTION_OPTIONS: RadioOption[] = [
  {
    label: '$10 per 1 Day',
    value: '$10 per 1 Day',
  },
  {
    label: '$50 per 7 Day',
    value: '$50 per 7 Day',
  },
  {
    label: '$100 per month',
    value: '$100 per month',
  },
]

interface AccountManagementProps {
  setIsBusinessAccount: (isBusinessAccount: boolean) => void
}

const AccountType = ({ setIsBusinessAccount }: AccountManagementProps) => {
  const handleAccountTypeChange = (value: string) => {
    setIsBusinessAccount(value === AccountTypeValue.business)
  }

  return (
    <div className={s.block}>
      <RadioGroupBlock
        title={'Account type:'}
        options={ACCOUNT_OPTIONS}
        defaultValue={AccountTypeValue.personal}
        onChange={handleAccountTypeChange}
      />
    </div>
  )
}

const SubscriptionCosts = () => {
  return (
    <div className={s.block}>
      <RadioGroupBlock
        title={'Your Subscription Costs:'}
        options={SUBSCRIPTION_OPTIONS}
        defaultValue={'$10 per 1 Day'}
      />
    </div>
  )
}

const PAYMENT_IMAGE_SIZE = {
  width: 86,
  height: 54,
} as const
const PaymentMethodOption = ({ setIsModal }: { setIsModal: (value: boolean) => void }) => {
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
    </div>
  )
}

const CurrentSubscription = () => {
  return (
    <div className={s.block}>
      <Typography as={'label'} className={s.radioTitle} variant={'h3'}>
        Current Subscription:
      </Typography>
      <div className={s.radioGroupWrapp}>
        <div className={s.subscriptionInfo}>
          <div>
            <Typography as={'span'} variant={'body2'} color={'grey'}>
              Expire at
            </Typography>
            <Typography as={'span'} variant={'subtitle1'}>
              12.02.2022
            </Typography>
          </div>
          <div>
            <Typography as={'span'} variant={'body2'} color={'grey'}>
              Next payment
            </Typography>
            <Typography as={'span'} variant={'subtitle1'}>
              13.02.2022
            </Typography>
          </div>
        </div>
      </div>
      <Checkbox className={s.box} label={'Auto-Renewal'} />
    </div>
  )
}

export const AccountManagement = ({ className, ...rest }: Props) => {
  const [isBusinessAccount, setIsBusinessAccount] = useState<boolean>(false)
  const [isModal, setIsModal] = useState<boolean>(false)
  const { pay, error, isLoading } = usePaypalPayment()

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

  return (
    <div className={clsx(s.profileManagement, className)}>
      <CurrentSubscription />
      <AccountType setIsBusinessAccount={setIsBusinessAccount} />
      {isBusinessAccount && (
        <>
          <SubscriptionCosts />
          <PaymentMethodOption setIsModal={setIsModal} />
        </>
      )}
      <Modal isOpen={isModal} title={'Create payment'} onClose={() => setIsModal(false)}>
        <Typography as={'p'} variant={'body1'}>
          Auto-renewal will be enabled with this payment. You can disable it anytime in your profile
          settings
        </Typography>
        <div className={s.infoPaymentModal}>
          <Checkbox label={'I Agree'}></Checkbox>
          <Button onClick={() => handlePayment()}>OK</Button>
        </div>
      </Modal>
    </div>
  )
}
