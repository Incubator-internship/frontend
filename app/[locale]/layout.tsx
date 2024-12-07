import type { Metadata } from 'next'

import { Suspense } from 'react'

import StoreProvider from '@/app/config/store/storeProvider'
import { Header } from '@/shared/ui/header'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'

import '@/shared/styles/index.scss'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'

export const metadata: Metadata = {
  description: 'Inctagram app',
  title: 'Inctagram',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <html lang={locale}>
        <StoreProvider>
          <Suspense>
            <body>
              <Header count={0} isAuth={false} />
              <main>{children}</main>
            </body>
          </Suspense>
        </StoreProvider>
      </html>
    </NextIntlClientProvider>
  )
}
