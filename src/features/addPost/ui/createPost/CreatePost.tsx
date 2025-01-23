import { Dispatch, SetStateAction, useState } from 'react'
import { FileWithPath } from 'react-dropzone'

import { AddPhotoMainModal } from '@/features/addPost/ui/addPhotoMainModal/addPhotoMainModal'
import { CroppingPhotoStep } from '@/features/addPost/ui/croppingPhotoStep/croppingPhotoStep'
import { FiltersPhotoStep } from '@/features/addPost/ui/filtersPhotoStep/filtersPhotoStep'
import { Modal } from '@/shared/ui/modal'
import { Typography } from '@/shared/ui/typography'

type Props = {
  isOpenMainPostModal: boolean
  isOpenStepsPostModal: boolean
  setIsOpenMainPostModal: Dispatch<SetStateAction<boolean>>
  setIsOpenStepsPostModal: Dispatch<SetStateAction<boolean>>
}
export type FileWithPreview = { preview: string } & FileWithPath

export default function CreatePost({
  isOpenMainPostModal,
  isOpenStepsPostModal,
  setIsOpenMainPostModal,
  setIsOpenStepsPostModal,
}: Props) {
  const [imageWithPreview, setImageWithPreview] = useState<FileWithPreview[] | null>([])

  // const files = useAppSelector(state => state.post.images)

  const [files, setFiles] = useState<FileWithPath[]>([])

  return (
    <div>
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
    </div>
  )
}
