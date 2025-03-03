import { Dispatch, SetStateAction, useId, useState } from 'react'
import { FileWithPath, useDropzone } from 'react-dropzone'

import { FileWithPreview } from '@/features/addPost/ui/createPost/CreatePost'
import ImageIcon from '@/shared/assets/icons/ImageIcon'
import { Button } from '@/shared/ui/button'
import { useTranslations } from 'next-intl'
import { v4 as uuidv4 } from 'uuid'

import s from './addPhotoMainModal.module.scss'

type Props = {
  images: FileWithPreview[]
  setImages: Dispatch<SetStateAction<FileWithPreview[]>>
  setTextErrorModal?: (error: string) => void
}

export const MAX_IMAGES = 10

export const AddPhotoMainModal = ({ images, setImages, setTextErrorModal }: Props) => {
  const t = useTranslations('AddPostModal')
  const [error, setError] = useState('')

  const { acceptedFiles, getInputProps, getRootProps, open } = useDropzone({
    accept: { 'image/jpeg': [], 'image/png': [] },
    maxSize: 2 * 1024 * 1024, // 2 MB in bytes
    onDrop: acceptedFiles => {
      const totalImages = images.length + acceptedFiles.length

      if (totalImages > MAX_IMAGES) {
        setTextErrorModal?.(`${t('AddPhotoErrorText3')} - ${MAX_IMAGES}`)

        return
      }
      const chosenImages = acceptedFiles.map(
        (image: FileWithPath): FileWithPreview => ({
          ...image,
          id: uuidv4(),
          preview: URL.createObjectURL(image),
        })
      )

      setImages([...images, ...chosenImages])

      setError('')
    },
    onDropRejected: fileRejections => {
      let errorMessage = ''

      if (images.length + fileRejections.length > MAX_IMAGES) {
        errorMessage = `${t('AddPhotoErrorText3')} - ${MAX_IMAGES}`
      } else {
        fileRejections.forEach(fileRejection => {
          if (fileRejection.errors.some(error => error.code === 'file-too-large')) {
            errorMessage = t('AddPhotoErrorText1')
          } else {
            errorMessage = t('AddPhotoErrorText2')
          }
        })
      }

      if (errorMessage) {
        setTextErrorModal?.(errorMessage)
      }
    },
  })

  return (
    <div className={s.modalWrapp}>
      <div>
        <div {...getRootProps({ className: s.dropzone })}>
          <input {...getInputProps()} />
          <ImageIcon />
        </div>
      </div>

      <Button className={s.btn} fullWidth onClick={open}>
        {t('MainModalBtn1')}
      </Button>
      <Button className={s.btnDraft} disabled fullWidth onClick={() => {}} variant={'transparent'}>
        {t('MainModalBtn2')}
      </Button>
    </div>
  )
}
