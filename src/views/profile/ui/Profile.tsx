'use client'

import { useGetMeQuery } from '@/app/api/auth/authApi'
import { useGetUsersQuery } from '@/app/api/inctagramApi'
import { Sidebar } from '@/shared/ui/sidebar'

export default function ProfilePage() {
  const { data: me } = useGetMeQuery()
  const { data: users } = useGetUsersQuery()

  return (
    <div>
      <Sidebar />
      <div>
        Profile Page - <b>{me?.login}</b>
      </div>
    </div>
  )
}
