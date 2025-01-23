'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { FileWithPath } from 'react-dropzone'

import { useGetMeQuery } from '@/app/api/auth/authApi'
import { useGetUsersQuery } from '@/app/api/inctagramApi'
import { useAppSelector } from '@/app/config/store/store'
import { AddPhotoMainModal } from '@/features/addPost/ui/addPhotoMainModal/addPhotoMainModal'
import CreatePost from '@/features/addPost/ui/createPost/CreatePost'
import { CroppingPhotoStep } from '@/features/addPost/ui/croppingPhotoStep/croppingPhotoStep'
import { FiltersPhotoStep } from '@/features/addPost/ui/filtersPhotoStep/filtersPhotoStep'
import { Button } from '@/shared/ui/button'
import Portal from '@/shared/ui/portal/Portal'
import { Sidebar } from '@/shared/ui/sidebar'
import { Typography } from '@/shared/ui/typography'

export default function ProfilePage() {
  const { data: me } = useGetMeQuery()
  const { data: users } = useGetUsersQuery()

  const [isOpenMainPostModal, setIsOpenMainPostModal] = useState<boolean>(false)
  const [isOpenStepsPostModal, setIsOpenStepsPostModal] = useState<boolean>(false)

  // console.log(files)
  //
  // useEffect(() => {
  //   if (files.length) {
  //     setIsOpenMainPostModal(false)
  //     setIsOpenStepsPostModal(true)
  //     setImageWithPreview(
  //       files.map(image =>
  //         Object.assign(image, {
  //           preview: URL.createObjectURL(image),
  //         })
  //       )
  //     )
  //
  //     return () => imageWithPreview?.forEach(image => URL.revokeObjectURL(image.preview))
  //   }
  // }, [files])

  return (
    <div>
      <Sidebar />

      <div>
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
      </div>
    </div>
  )
}
