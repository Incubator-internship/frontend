'use client'
import { ProfilePhoto } from '@/features/profilePhoto'
import { Tabs } from '@/shared/ui/tabs'
import { clsx } from 'clsx'

import s from './profileSettings.module.scss'

export default function ProfileSettings() {
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
            title: 'General information',
            value: '1',
          },
          {
            content: <div className={s.tabsContent}>Devices Content</div>,
            title: 'Devices',
            value: '2',
          },
          {
            content: <div className={s.tabsContent}>Account Management Content</div>,
            title: 'Account Management',
            value: '3',
          },
          {
            content: <div className={s.tabsContent}>My payments Content</div>,
            title: 'My payments',
            value: '4',
          },
        ]}
      />
    </div>
  )
}
