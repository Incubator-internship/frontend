import { routing } from '@/i18n/routing'
import { NextRequest, NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'

const NEUTRAL_PAGES = [
  '/confirm-email',
  '/createnewpassword',
  '/authentication',
  '/publicPage',
  '/publicPageModal',
]
const PROTECTED_PATHS = ['/profile', '/statistics', '/profile-settings', '/feed']
const SUPPORTED_LOCALES = ['en', 'ru']

export function middleware(req: NextRequest) {
  const { cookies, nextUrl } = req
  const pathname = nextUrl.pathname

  const BASE_URL = req.headers.get('host')?.includes('localhost')
    ? 'http://localhost:3000'
    : 'https://excubator.xyz'

  // Нейтральные страницы — редирект с локалью
  if (NEUTRAL_PAGES.includes(pathname)) {
    const locale = getPreferredLocale(req)

    return NextResponse.redirect(new URL(`${BASE_URL}/${locale}${pathname}${nextUrl.search}`))
  }

  // если путь уже содержит локаль
  const currentLocale = getCurrentLocaleFromPath(pathname)

  // Защищённые маршруты проверка токена
  const isRootPath = pathname === '/' || SUPPORTED_LOCALES.some(locale => pathname === `/${locale}`)

  const isProtected =
    !isRootPath &&
    PROTECTED_PATHS.some(path =>
      pathname.startsWith(currentLocale ? `/${currentLocale}${path}` : path)
    )

  if (isProtected) {
    const token = cookies.get('refreshToken')?.value

    if (!token) {
      const locale = currentLocale || getPreferredLocale(req)

      return NextResponse.redirect(new URL(`${BASE_URL}/${locale}/signin`))
    }
  }

  return createMiddleware(routing)(req)
}

function getPreferredLocale(req: NextRequest): string {
  const cookieLocale = req.cookies.get('NEXT_LOCALE')?.value

  if (cookieLocale && SUPPORTED_LOCALES.includes(cookieLocale)) {
    return cookieLocale
  }

  const acceptLang = req.headers.get('accept-language')?.split(',')[0].split('-')[0]

  if (acceptLang && SUPPORTED_LOCALES.includes(acceptLang)) {
    return acceptLang
  }

  return 'en'
}

function getCurrentLocaleFromPath(pathname: string): null | string {
  const pathLocale = pathname.split('/')[1]

  return SUPPORTED_LOCALES.includes(pathLocale) ? pathLocale : null
}

export const config = {
  matcher: ['/((?!api|_next|favicon.ico).*)'],
}
