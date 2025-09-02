import { useActiveSubscription } from '@/features/payments/hooks/useActiveSubscription'
import { useState } from 'react'
import s from '@/views/profileSettings/ui/accountManagement/accountManagement.module.scss'
import { Typography } from '@/shared/ui/typography'
import { format, parseISO } from 'date-fns'
import { Checkbox } from '@/shared/ui/checkbox'
import { useToggleAutoPay } from '@/features/payments'
import { useTranslations } from 'next-intl'

export const CurrentSubscription = () => {
  const t = useTranslations('AccountManagements')
  const {
    data: dataActiveSub,
    hasActiveSub,
    refetch: refActiveSub
  } = useActiveSubscription()
  const {
    isLoading: isLoadingEnableAutoRenew,
    toggleAutoPay
  } = useToggleAutoPay()
  const sub = dataActiveSub?.[0]
  const [checked, setChecked] = useState<boolean>(sub?.autoPay || false)

  const handleAutoRenewToggle = () => {
    const newValue = !checked
    setChecked(newValue)
    toggleAutoPay(newValue)
    refActiveSub()
  }

  if (!hasActiveSub) return null
console.log(t)
  return (
    <div className={s.block}>
      <Typography as="label" className={s.radioGroupTitle} variant="h3">
        {t('CurrentSub')}
      </Typography>
      <div className={s.radioGroupWrapp}>
        <div className={s.subscriptionInfo}>
          <div>
            <Typography as="span" variant="body2" color="grey">
              {t('ExpireAt')}
            </Typography>
            {sub?.ExpireAt && (
              <Typography as="span" variant="subtitle1">
                {format(parseISO(sub.ExpireAt), 'dd.MM.yyyy')}
              </Typography>
            )}
          </div>
          <div>
            <Typography as="span" variant="body2" color="grey">
              {t('NextPayment')}
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
          label={t('AutoRen')}
      />
    </div>
  )
}
