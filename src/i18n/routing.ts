import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  defaultLocale: 'en',

  locales: ['en', 'ru'],
  pathnames: {
    '/': {
      en: '/',
      ru: '/',
    },
  },
})

export type Locale = (typeof routing.locales)[number]
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing)
