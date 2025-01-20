'use client'

import { useEffect, useState } from 'react'
import { FileWithPath } from 'react-dropzone'

import { useGetMeQuery } from '@/app/api/auth/authApi'
import { useGetUsersQuery } from '@/app/api/inctagramApi'
import { useAppSelector } from '@/app/config/store/store'
import { AddPhotoMainModal } from '@/features/addPost/ui/addPhotoMainModal/addPhotoMainModal'
import { CroppingPhotoStep } from '@/features/addPost/ui/croppingPhotoStep/croppingPhotoStep'
import { FiltersPhotoStep } from '@/features/addPost/ui/filtersPhotoStep/filtersPhotoStep'
import { Button } from '@/shared/ui/button'
import { Modal } from '@/shared/ui/modal'
import { Sidebar } from '@/shared/ui/sidebar'
import { Typography } from '@/shared/ui/typography'

export type FileWithPreview = { preview: string } & FileWithPath

export default function ProfilePage() {
  const { data: me } = useGetMeQuery()
  const { data: users } = useGetUsersQuery()

  const [isOpenMainPostModal, setIsOpenMainPostModal] = useState<boolean>(false)
  const [isOpenStepsPostModal, setIsOpenStepsPostModal] = useState<boolean>(false)
  const [imageWithPreview, setImageWithPreview] = useState<FileWithPreview[] | null>([])

  const files = useAppSelector(state => state.post.images)

  console.log(files)

  useEffect(() => {
    if (files.length) {
      setIsOpenMainPostModal(false)
      setIsOpenStepsPostModal(true)
      setImageWithPreview(
        files.map(image =>
          Object.assign(image, {
            preview: URL.createObjectURL(image),
          })
        )
      )

      return () => imageWithPreview?.forEach(image => URL.revokeObjectURL(image.preview))
    }
  }, [files])

  return (
    <div>
      <Sidebar />
      <Modal
        isOpen={isOpenMainPostModal}
        onClose={() => setIsOpenMainPostModal(false)}
        title={'Add Photo'}
      >
        <AddPhotoMainModal />
      </Modal>
      <Modal
        isOpen={isOpenStepsPostModal}
        isStepMode
        onClose={() => setIsOpenStepsPostModal(false)}
        steps={[
          <CroppingPhotoStep images={imageWithPreview} key={1} />,
          <FiltersPhotoStep images={imageWithPreview} key={2} />,
          <Typography as={'p'} key={3} style={{ marginLeft: '15px' }} variant={'body1'}>
            Step 3
          </Typography>,
        ]}
        title={['Cropping', 'Filters', 'Publication']}
      />
      <div>
        Profile Page - <b>{me?.login}</b>
        <Button onClick={() => setIsOpenMainPostModal(true)}>addpost</Button>
      </div>
    </div>
  )
}
