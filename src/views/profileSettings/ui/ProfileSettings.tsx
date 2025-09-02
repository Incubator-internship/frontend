'use client'

import React, {useEffect, useState} from 'react'

import { Tabs } from '@/shared/ui/tabs'
import { AccountDevices } from '@/views/profileSettings/ui/accountDevices/AccountDevices'
import { AccountInformation } from '@/views/profileSettings/ui/accountInformation/AccountInformation'
import { AccountPayments } from '@/views/profileSettings/ui/accountPayments/AccountPayments'
import { useTranslations } from 'next-intl'

import s from './profileSettings.module.scss'
import {AccountManagement} from "@/views/profileSettings/ui/accountManagement";
import {LOCAL_STORAGE_KEY_ACTIVE_TAB} from "@/shared/constants";



export default function ProfileSettings() {
    const t = useTranslations('ProfileSettingsPage')

    const tabs = [
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
    ]

    const [activeTab, setActiveTab] = useState<string | null>(null)

    useEffect(() => {
        const savedTab = localStorage.getItem(LOCAL_STORAGE_KEY_ACTIVE_TAB)
        setActiveTab(savedTab ?? '1')
    }, [])

    const onTabChange = (value: string) => {
        setActiveTab(value)
        localStorage.setItem(LOCAL_STORAGE_KEY_ACTIVE_TAB, value)
    }

    if (activeTab === null) {
        return null
    }

    return (
        <div>
            <Tabs className={s.tabs} value={activeTab} onValueChange={onTabChange} tabs={tabs}/>
        </div>
    )
}
