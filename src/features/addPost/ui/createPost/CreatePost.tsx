import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { FileWithPath } from 'react-dropzone'
import { Area } from 'react-easy-crop'

import { AddPhotoMainModal } from '@/features/addPost/ui/addPhotoMainModal/addPhotoMainModal'
import { CroppingPhotoStep } from '@/features/addPost/ui/croppingPhotoStep/croppingPhotoStep'
import { FiltersPhotoStep } from '@/features/addPost/ui/filtersPhotoStep/filtersPhotoStep'
import { Modal } from '@/shared/ui/modal'
import { Typography } from '@/shared/ui/typography'
import { getCroppedImg } from '@/shared/utils/cropImageUtils'

import { useCroppSettings } from '../croppingPhotoStep/croppingPhotoItem/hooks/useCroppSettings'

type Props = {
  isOpenMainPostModal: boolean
  isOpenStepsPostModal: boolean
  setIsOpenMainPostModal: Dispatch<SetStateAction<boolean>>
  setIsOpenStepsPostModal: Dispatch<SetStateAction<boolean>>
}
export type FileWithPreview = { id: string; preview: string } & FileWithPath

export default function CreatePost({
  isOpenMainPostModal,
  isOpenStepsPostModal,
  setIsOpenMainPostModal,
  setIsOpenStepsPostModal,
}: Props) {
  const [imageWithPreview, setImageWithPreview] = useState<FileWithPreview[]>([])
  const { croppedAreaPixels, rotation } = useCroppSettings()

  useEffect(() => {
    if (imageWithPreview?.length) {
      setIsOpenMainPostModal(false)
      setIsOpenStepsPostModal(true)
    }
  }, [imageWithPreview, setIsOpenMainPostModal, setIsOpenStepsPostModal])

  useEffect(() => {
    if (imageWithPreview.length === 0 && isOpenStepsPostModal) {
      setIsOpenMainPostModal(true)
      setIsOpenStepsPostModal(false)
    }
  }, [imageWithPreview, isOpenStepsPostModal, setIsOpenMainPostModal, setIsOpenStepsPostModal])

  return (
    <div>
      <Modal
        isOpen={isOpenMainPostModal}
        onClose={() => setIsOpenMainPostModal(false)}
        title={'Add Photo'}
      >
        <AddPhotoMainModal images={imageWithPreview} setImages={setImageWithPreview} />
      </Modal>
      <Modal
        isOpen={isOpenStepsPostModal}
        isStepMode
        onClose={() => setIsOpenStepsPostModal(false)}
        steps={[
          <CroppingPhotoStep
            images={imageWithPreview}
            key={1}
            setImageWithPreview={setImageWithPreview}
          />,
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
