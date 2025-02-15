import { cookies } from 'next/headers'

export async function checkAuth() {
  const refreshToken = cookies().get('refreshToken')

  if (!refreshToken) {
    return { isAuth: false }
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/me`, {
      credentials: 'include',
      headers: {
        Authorization: `Bearer ${refreshToken.value}`,
      },
      method: 'GET',
    })

    if (!res.ok) {
      return { isAuth: false }
    }

    return { isAuth: true }
  } catch (err) {
    console.error('Auth check failed:', err)

    return { isAuth: false }
  }
}
