import { Sidebar } from '@/shared/ui/sidebar'
import { checkAuth } from '@/shared/utils/checkAuth'
import UserProfile from '@/views/userProfile/ui/UserProfile'

export default async function ProfilePage() {
  const { isAuth, userId } = await checkAuth()

  return (
    <div style={{ display: 'flex' }}>
      <UserProfile params={{ userId: userId }} />
    </div>
  )
}
