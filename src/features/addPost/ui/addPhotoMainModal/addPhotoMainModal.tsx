import { Dispatch, SetStateAction, useId, useState } from 'react'
import { FileWithPath, useDropzone } from 'react-dropzone'

import { FileWithPreview } from '@/features/addPost/ui/createPost/CreatePost'
import ImageIcon from '@/shared/assets/icons/ImageIcon'
import { Button } from '@/shared/ui/button'
import { useTranslations } from 'next-intl'
import { v1 } from 'uuid'

import s from './addPhotoMainModal.module.scss'

type Props = {
  images: FileWithPreview[]
  setImages: Dispatch<SetStateAction<FileWithPreview[]>>
}

export const MAX_IMAGES = 10

export const AddPhotoMainModal = ({ images, setImages }: Props) => {
  const t = useTranslations('AddPostModal')
  const [error, setError] = useState('')

  const { acceptedFiles, getInputProps, getRootProps, open } = useDropzone({
    accept: { 'image/jpeg': [], 'image/png': [] },
    maxSize: 20 * 1024 * 1024, // 20 MB in bytes
    onDrop: acceptedFiles => {
      if (images.length + acceptedFiles.length > MAX_IMAGES) {
        setError(`You can only add up to ${MAX_IMAGES} images.`)

        return
      }
      const chosenImages = acceptedFiles.map(
        (image: FileWithPath): FileWithPreview => ({
          ...image,
          id: v1(),
          preview: URL.createObjectURL(image),
        })
      )

      setImages([...images, ...chosenImages])

      setError('')
    },
    onDropRejected: fileRejections => {
      const errorMessage = fileRejections
        .map(fileRejection => {
          if (fileRejection.errors[0].code === 'file-too-large') {
            return 'File is too large. Maximum size is 20 MB.'
          } else {
            return 'Only JPEG and PNG images are allowed.'
          }
        })
        .join(' ')

      setError(errorMessage)
    },
  })

  return (
    <div className={s.modalWrapp}>
      <div>
        <div {...getRootProps({ className: s.dropzone })}>
          <input {...getInputProps()} />
          <ImageIcon />
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>

      <Button className={s.btn} fullWidth onClick={open}>
        {t('MainModalBtn1')}
      </Button>
      <Button disabled fullWidth onClick={() => {}} variant={'transparent'}>
        {t('MainModalBtn2')}
      </Button>
    </div>
  )
}
