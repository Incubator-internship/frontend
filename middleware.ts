import { routing } from '@/i18n/routing'
import { NextRequest, NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'

const NEUTRAL_PAGES = ['/confirm-email', '/createnewpassword', '/authentication'] //ссылки на эти страницы приходят на почту с бекенда

export function middleware(req: NextRequest) {
  const { cookies, headers, nextUrl } = req

  if (NEUTRAL_PAGES.includes(nextUrl.pathname)) {
    const locale = getPreferredLocale(req)

    return NextResponse.redirect(new URL(`/${locale}${nextUrl.pathname}${nextUrl.search}`, req.url))
  }

  return createMiddleware(routing)(req)
}

function getPreferredLocale(req: NextRequest) {
  const cookieLocale = req.cookies.get('NEXT_LOCALE')?.value

  if (cookieLocale) {
    return cookieLocale
  }

  const acceptLang = req.headers.get('accept-language')?.split(',')[0].split('-')[0]

  if (acceptLang) {
    return ['en', 'ru'].includes(acceptLang) ? acceptLang : 'en'
  }
}

export const config = {
  matcher: ['/((?!api|_next|favicon.ico).*)'],
}
