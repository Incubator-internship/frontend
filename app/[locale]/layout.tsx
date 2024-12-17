import type { Metadata } from 'next'

import React, { Suspense } from 'react'

import StoreProvider from '@/app/config/store/storeProvider'
import { Header } from '@/shared/ui/header'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import '@/shared/styles/index.scss'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'

import { Locale, routing } from '../../src/i18n/routing'

export const metadata: Metadata = {
  description: 'Inctagram app',
  title: 'Inctagram',
}
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { locale: Locale }
}>) {
  const { locale } = await params

  if (!routing.locales.includes(locale as Locale)) {
    notFound()
  }
  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <html lang={locale}>
        <StoreProvider>
          <Suspense>
            <body>
              <Header />
              <main>{children}</main>
            </body>
          </Suspense>
        </StoreProvider>
      </html>
    </NextIntlClientProvider>
  )
}
