'use client'

import { useState } from 'react'

import { useGetMeQuery } from '@/app/api/auth/authApi'
import { useGetUsersQuery } from '@/app/api/inctagramApi'
import CreatePost from '@/features/addPost/ui/createPost/CreatePost'
import { Button } from '@/shared/ui/button'
import { Portal } from '@/shared/ui/portal/Portal'
import { Sidebar } from '@/shared/ui/sidebar'
import UserProfile from '@/views/userProfile/ui/UserProfile'

export default function ProfilePage() {
  // const { data: me } = useGetMeQuery()
  // const { data: users } = useGetUsersQuery()

  // const [isOpenMainPostModal, setIsOpenMainPostModal] = useState<boolean>(false)
  // const [isOpenStepsPostModal, setIsOpenStepsPostModal] = useState<boolean>(false)

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <UserProfile />
      {/* <div>
        Profile Page - <b>{me?.login}</b>
        <Button onClick={() => setIsOpenMainPostModal(true)}>addpost</Button>
        {setIsOpenMainPostModal && (
          <Portal containerId={'portal'}>
            <CreatePost
              isOpenMainPostModal={isOpenMainPostModal}
              isOpenStepsPostModal={isOpenStepsPostModal}
              setIsOpenMainPostModal={setIsOpenMainPostModal}
              setIsOpenStepsPostModal={setIsOpenStepsPostModal}
            />
          </Portal>
        )}
      </div> */}
    </div>
  )
}
