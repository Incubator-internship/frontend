'use client'

import { useEffect } from 'react'
import { usePathname } from '@/i18n/routing'
import { LOCAL_STORAGE_KEY_ACTIVE_TAB } from '@/shared/constants'

export const PathChecker = () => {
    const pathname = usePathname()

    useEffect(() => {
        if (!pathname) return

        if (!pathname.includes('/profile-settings')) {
            localStorage.setItem(LOCAL_STORAGE_KEY_ACTIVE_TAB, '1')
        }
    }, [pathname])

    return null
}
