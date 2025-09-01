import { useActiveSubscription } from '@/features/payments/hooks/useActiveSubscription'
import { useEffect, useState } from 'react'
import s from '@/views/profileSettings/ui/accountManagement/accountManagement.module.scss'
import { Typography } from '@/shared/ui/typography'
import { format, parseISO } from 'date-fns'
import { Checkbox } from '@/shared/ui/checkbox'
import { useToggleAutoPay } from '@/features/payments'

export const CurrentSubscription = () => {
  const { data: dataActiveSub } = useActiveSubscription()
  const { isLoading: isLoadingEnableAutoRenew, enable } = useToggleAutoPay()
  const sub = dataActiveSub?.[0]
  const [checked, setChecked] = useState<boolean>(sub?.autoPay || false)

  const isDataInactive = !dataActiveSub

  const handleAutoRenewToggle = () => {
    const newValue = !checked
    setChecked(newValue)
    enable(newValue)
  }

  useEffect(() => {
    setChecked(sub?.autoPay ?? false)
  }, [sub])

  if (isDataInactive) return null

  return (
    <div className={s.block}>
      <Typography as="label" className={s.radioTitle} variant="h3">
        Current Subscription:
      </Typography>
      <div className={s.radioGroupWrapp}>
        <div className={s.subscriptionInfo}>
          <div>
            <Typography as="span" variant="body2" color="grey">
              Expire At
            </Typography>
            {sub?.ExpireAt && (
              <Typography as="span" variant="subtitle1">
                {format(parseISO(sub.ExpireAt), 'dd.MM.yyyy')}
              </Typography>
            )}
          </div>
          <div>
            <Typography as="span" variant="body2" color="grey">
              Next Payment
            </Typography>
            {sub?.nextPayment && (
              <Typography as="span" variant="subtitle1">
                {format(parseISO(sub.nextPayment), 'dd.MM.yyyy')}
              </Typography>
            )}
          </div>
        </div>
      </div>
      <Checkbox
          checked={checked}
          onCheckedChange={handleAutoRenewToggle}
          className={s.box}
          disabled={isLoadingEnableAutoRenew}
          label={'Auto-Renewal'}
      />
    </div>
  )
}
