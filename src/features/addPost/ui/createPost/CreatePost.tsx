import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { FileWithPath } from 'react-dropzone'
import { FormProvider, useForm } from 'react-hook-form'

import { useCreatePostMutation } from '@/app/api/posts/postsApi'
import { AddPhotoErrorModal } from '@/features/addPost/ui/addPhotoErrorModal/AddPhotoErrorModal'
import { AddPhotoMainModal } from '@/features/addPost/ui/addPhotoMainModal/addPhotoMainModal'
import { CroppingPhotoStep } from '@/features/addPost/ui/croppingPhotoStep/croppingPhotoStep'
import { FiltersPhotoStep } from '@/features/addPost/ui/filtersPhotoStep/filtersPhotoStep'
import { PostFormData, maximumCharactersSchema } from '@/shared/model/schemas/schemas'
import { Modal } from '@/shared/ui/modal'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'

import s from './createPost.module.scss'

import { convertPreviewToFile } from '../../utils/photoUtils'
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
  const t = useTranslations('AddPostModal')

  const [imageWithPreview, setImageWithPreview] = useState<FileWithPreview[]>([])
  const [textErrorModal, setTextErrorModal] = useState('')

  const [createPost] = useCreatePostMutation()

  const methods = useForm<PostFormData>({
    defaultValues: { description: '' },
    resolver: zodResolver(maximumCharactersSchema),
  })

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

  const onSaveCroppedImage = (newImgWithPreview: FileWithPreview) => {
    setImageWithPreview(prevImages => [...prevImages, newImgWithPreview])
  }

  const sendPostCallBack = async (data: PostFormData) => {
    if (imageWithPreview.length === 0) {
      return
    }

    const bodyFormData = new FormData()

    try {
      const files = await Promise.all(imageWithPreview.map(convertPreviewToFile))

      files.forEach((file, index) => {
        bodyFormData.append('photos', file)
      })

      bodyFormData.append('content', data.description)

      await createPost(bodyFormData).unwrap()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <Modal
        isOpen={isOpenMainPostModal}
        onClose={() => setIsOpenMainPostModal(false)}
        title={t('MainModalTitle')}
      >
        <AddPhotoMainModal
          images={imageWithPreview}
          setImages={setImageWithPreview}
          setTextErrorModal={setTextErrorModal}
        />
      </Modal>
      <FormProvider {...methods}>
        <Modal
          className={s.createPostModal}
          createPost={methods.handleSubmit(sendPostCallBack)}
          isOpen={isOpenStepsPostModal}
          isStepMode
          onClose={() => setIsOpenStepsPostModal(false)}
          steps={[
            <CroppingPhotoStep
              images={imageWithPreview}
              key={1}
              onSaveCroppedImage={onSaveCroppedImage}
              setImageWithPreview={setImageWithPreview}
              setTextErrorModal={setTextErrorModal}
            />,
            <FiltersPhotoStep images={imageWithPreview} key={2} />,
            <PublushPhotoStep images={imageWithPreview} key={3} onSubmit={sendPostCallBack} />,
          ]}
          title={[t('CroppingPhotoTitle'), t('FiltersPhotoTitle'), t('PublishPhotoTitle')]}
        />
      </FormProvider>
      <Modal
        className={s.errorModal}
        isOpen={!!textErrorModal}
        onClose={() => setTextErrorModal('')}
        title={t('AddPhotoErrorTitle')}
      >
        <AddPhotoErrorModal errorText={textErrorModal} setTextErrorModal={setTextErrorModal} />
      </Modal>
    </div>
  )
}
