import { cookies } from 'next/headers'

export async function checkAuth() {
  const refreshToken = cookies().get('refreshToken')

  if (!refreshToken) {
    return { isAuth: false }
  }

  try {
    // 1. Сначала проверяем авторизацию
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

    const authData = await res.json()

    if (!authData?.userId) {
      return { isAuth: false }
    }

    const profileRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/profile/${authData.userId}`,
      {
        headers: {
          Authorization: `Bearer ${refreshToken.value}`,
        },
      }
    )

    if (!profileRes.ok) {
      return {
        isAuth: true,
        userId: authData.userId,
        firstName: null,
        lastName: null,
      }
    }

    const profile = await profileRes.json()

    return {
      isAuth: true,
      userId: authData.userId,
      nickname: authData.login,
      aboutMe: profile.aboutMe,
      originalAvatarUrl: profile.originalAvatarUrl,
    }
  } catch (err) {
    console.error('Profile data error:', err)

    return { isAuth: false }
  }
}
