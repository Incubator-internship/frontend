import { useEffect, useState } from 'react'

import { useEnableAutoRenew } from '@/features/payments'
import { useActiveSubscription } from '@/features/payments/hooks/useActiveSubscription'
import { useCancelPaypal } from '@/features/payments/hooks/useCancelPaypal'
import { Checkbox } from '@/shared/ui/checkbox'
import { Typography } from '@/shared/ui/typography'
import { format, parseISO } from 'date-fns'

import s from '@/views/profileSettings/ui/accountManagement/accountManagement.module.scss'

export const CurrentSubscription = () => {
  const { data: dataActiveSub } = useActiveSubscription()
  const {
    cancel,
    isLoading: isLoadingCancelPayPal,
    isSuccess: isSuccessCancelPaypal,
  } = useCancelPaypal()
  const {
    isLoading: isLoadingEnableAutoRenew,
    enable,
    isSuccess: isSuccessEnableAutoRenew,
  } = useEnableAutoRenew()
  const sub = dataActiveSub?.[0]
  const [checked, setChecked] = useState<boolean>(sub?.autoRenewal || false)

  const isDataInactive = !dataActiveSub

  const handleAutoRenewToggle = () => {
    if (checked) {
      cancel()
    } else {
      enable()
    }
  }

  useEffect(() => {
    setChecked(sub?.autoRenewal ?? false)
  }, [sub])

  useEffect(() => {
    if (isSuccessCancelPaypal) {
      setChecked(false)
    }
  }, [isSuccessCancelPaypal])

  useEffect(() => {
    if (isSuccessEnableAutoRenew) {
      setChecked(true)
    }
  }, [isSuccessEnableAutoRenew])

  if (isDataInactive) {
    return null
  }

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
            {sub?.subscriptionStart && (
              <Typography as={'span'} variant={'subtitle1'}>
                {format(parseISO(sub.subscriptionStart), 'dd.MM.yyyy')}
              </Typography>
            )}
          </div>
          <div>
            <Typography as={'span'} variant={'body2'} color={'grey'}>
              Subscription end
            </Typography>
            {sub?.subscription && (
              <Typography as={'span'} variant={'subtitle1'}>
                {format(parseISO(sub.subscription), 'dd.MM.yyyy')}
              </Typography>
            )}
          </div>
        </div>
      </div>
      <Checkbox
        checked={checked}
        onCheckedChange={handleAutoRenewToggle}
        className={s.box}
        disabled={isLoadingCancelPayPal || isLoadingEnableAutoRenew}
        label={'Auto-Renewal'}
      />
    </div>
  )
}
