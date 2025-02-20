import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { FileWithPath } from 'react-dropzone'
import { FormProvider, useForm } from 'react-hook-form'

import { useCreatePostMutation } from '@/app/api/posts/postsApi'
import { AddPhotoMainModal } from '@/features/addPost/ui/addPhotoMainModal/addPhotoMainModal'
import { CroppingPhotoStep } from '@/features/addPost/ui/croppingPhotoStep/croppingPhotoStep'
import { FiltersPhotoStep } from '@/features/addPost/ui/filtersPhotoStep/filtersPhotoStep'
import { Modal } from '@/shared/ui/modal'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { convertPreviewToFile } from '../../utils/photoUtils'
import PublushPhotoStep from '../publishPhotoStep/PublushPhotoStep'

type Props = {
  isOpenMainPostModal: boolean
  isOpenStepsPostModal: boolean
  setIsOpenMainPostModal: Dispatch<SetStateAction<boolean>>
  setIsOpenStepsPostModal: Dispatch<SetStateAction<boolean>>
}
export type FileWithPreview = { id: string; preview: string } & FileWithPath

const schema = z.object({
  description: z.string().max(500, 'Максимум 500 символов'),
})

export type FormData = z.infer<typeof schema>

export default function CreatePost({
  isOpenMainPostModal,
  isOpenStepsPostModal,
  setIsOpenMainPostModal,
  setIsOpenStepsPostModal,
}: Props) {
  const [imageWithPreview, setImageWithPreview] = useState<FileWithPreview[]>([])
  const [createPost] = useCreatePostMutation()

  const methods = useForm<FormData>({
    defaultValues: { description: '' },
    resolver: zodResolver(schema),
  })

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

  const sendPostCallBack = async (data: FormData) => {
    if (imageWithPreview.length === 0) {
      console.error('Ошибка/ Нет изображений для загрузки')

      return
    }

    const bodyFormData = new FormData()

    try {
      const files = await Promise.all(imageWithPreview.map(convertPreviewToFile))

      files.forEach((file, index) => {
        console.log(`Файл ${index}:`, file.name, file.type, file.size)
        bodyFormData.append('photos', file)
      })

      bodyFormData.append('content', data.description)

      const response = await createPost(bodyFormData).unwrap()

      console.log(response)
    } catch (error) {
      console.error(error)
    }
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
      <FormProvider {...methods}>
        <Modal
          createPost={methods.handleSubmit(sendPostCallBack)}
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
            <PublushPhotoStep images={imageWithPreview} key={3} onSubmit={sendPostCallBack} />,
          ]}
          title={['Cropping', 'Filters', 'Publication']}
        />
      </FormProvider>
    </div>
  )
}
