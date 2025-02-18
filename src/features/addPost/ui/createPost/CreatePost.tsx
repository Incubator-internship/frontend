import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { FileWithPath } from 'react-dropzone'

import { AddPhotoMainModal } from '@/features/addPost/ui/addPhotoMainModal/addPhotoMainModal'
import { CroppingPhotoStep } from '@/features/addPost/ui/croppingPhotoStep/croppingPhotoStep'
import { FiltersPhotoStep } from '@/features/addPost/ui/filtersPhotoStep/filtersPhotoStep'
import { Modal } from '@/shared/ui/modal'

import PublushPhotoStep from '../publishPhotoStep/PublushPhotoStep'

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

  useEffect(() => {
    if (imageWithPreview?.length) {
      // debugger
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

  const onSaveCroppedImage = (newImgWithPreview: FileWithPreview) => {
    setImageWithPreview(prevImages => [...prevImages, newImgWithPreview])
  }

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
        // onNext={onCroppStep}
        steps={[
          <CroppingPhotoStep
            images={imageWithPreview}
            key={1}
            onSaveCroppedImage={onSaveCroppedImage}
            setImageWithPreview={setImageWithPreview}
          />,
          <FiltersPhotoStep images={imageWithPreview} key={2} />,
          <PublushPhotoStep images={imageWithPreview} key={3} />,
        ]}
        title={['Cropping', 'Filters', 'Publication']}
      />
    </div>
  )
}
