import { checkAuth } from '@/shared/utils/checkAuth'
import PublicPage from '@/views/publicPage/ui/PublicPage'
import UserProfile from '@/views/userProfile/ui/UserProfile'

export default async function ProfilePage() {
  const { isAuth, userId } = await checkAuth()

  if (!isAuth) {
    return <PublicPage />
  }

  return (
    <div style={{ display: 'flex' }}>
      <UserProfile params={{ userId: userId }} />
    </div>
  )
}
