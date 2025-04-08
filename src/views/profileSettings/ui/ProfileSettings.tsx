'use client'
import { Tabs } from '@/shared/ui/tabs'
import { AccountDevices } from '@/views/profileSettings/ui/accountDevices/AccountDevices'
import { AccountInformation } from '@/views/profileSettings/ui/accountInformation/AccountInformation'
import { AccountManagement } from '@/views/profileSettings/ui/accountManagement/AccountManagement'
import { AccountPayments } from '@/views/profileSettings/ui/accountPayments/AccountPayments'
import { useTranslations } from 'next-intl'

import s from './profileSettings.module.scss'

export default function ProfileSettings() {
  const t = useTranslations('ProfileSettingsPage')

  return (
    <div>
      <Tabs
        className={s.tabs}
        defaultValue={'1'}
        tabs={[
          {
            content: <AccountInformation className={s.tabsContent} />,
            title: t('Tab1'),
            value: '1',
          },
          {
            content: <AccountDevices className={s.tabsContent} />,
            title: t('Tab2'),
            value: '2',
          },
          {
            content: <AccountManagement className={s.tabsContent} />,
            title: t('Tab3'),
            value: '3',
          },
          {
            content: <AccountPayments className={s.tabsContent} />,
            title: t('Tab4'),
            value: '4',
          },
        ]}
      />
    </div>
  )
}
