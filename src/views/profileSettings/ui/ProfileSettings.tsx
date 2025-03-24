'use client'
import { ProfilePhoto } from '@/features/profilePhoto'
import { Tabs } from '@/shared/ui/tabs'
import { clsx } from 'clsx'
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
            content: (
              <div className={clsx(s.tabsContent, s.profileInformation)}>
                <div className={s.profileInformationAvatar}>
                  <ProfilePhoto />
                </div>
                <div className={s.profileInformationForm}>
                  Profile form. Here will be a form for filling out a profile
                </div>
              </div>
            ),
            title: t('Tab1'),
            value: '1',
          },
          {
            content: <div className={s.tabsContent}>Devices Content</div>,
            title: t('Tab2'),
            value: '2',
          },
          {
            content: <div className={s.tabsContent}>Account Management Content</div>,
            title: t('Tab3'),
            value: '3',
          },
          {
            content: <div className={s.tabsContent}>My payments Content</div>,
            title: t('Tab4'),
            value: '4',
          },
        ]}
      />
    </div>
  )
}
