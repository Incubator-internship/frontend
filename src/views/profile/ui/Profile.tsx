import { useGetProfileQuery } from '@/app/api/users/usersApi'
import { checkAuth } from '@/shared/utils/checkAuth'
import PublicPage from '@/views/publicPage/ui/PublicPage'
import UserProfile from '@/views/userProfile/ui/UserProfile'

import s from './profile.module.scss'

export default async function ProfilePage() {
  const { isAuth, userId, nickname, originalAvatarUrl, aboutMe } = await checkAuth()

  if (!isAuth) {
    return <PublicPage />
  }

  return (
    <div className={s.profile}>
      <UserProfile params={{ userId, nickname, originalAvatarUrl, aboutMe }} />
    </div>
  )
}
