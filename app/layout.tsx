import type { Metadata } from 'next'

import StoreProvider from '@/app/store/storeProvider'
import { Header } from '@/shared/ui/header'

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang={'en'}>
      <StoreProvider>
        <body>
          <Header count={0} isAuth={false} />
          <main>{children}</main>
        </body>
      </StoreProvider>
    </html>
  )
}
