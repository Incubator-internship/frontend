import { Dispatch, SetStateAction } from 'react'
import { FileWithPath, useDropzone } from 'react-dropzone'

import { FileWithPreview } from '@/features/addPost/ui/createPost/CreatePost'
import { useTranslations } from 'next-intl'
import { v4 as uuidv4 } from 'uuid'

export const MAX_IMAGES = 10

type UseDropzoneOptions = {
  images: FileWithPreview[]
  setImages: Dispatch<SetStateAction<FileWithPreview[]>>
  setTextErrorModal?: (error: string) => void
}

export const useImageDropzone = ({ images, setImages, setTextErrorModal }: UseDropzoneOptions) => {
  const t = useTranslations('AddPostModal')

  const onDrop = (acceptedFiles: File[]) => {
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
  }

  const onDropRejected = (fileRejections: any) => {
    let errorMessage = ''

    if (images.length + fileRejections.length > MAX_IMAGES) {
      errorMessage = `${t('AddPhotoErrorText3')} - ${MAX_IMAGES}`
    } else {
      fileRejections.forEach((fileRejection: any) => {
        if (fileRejection.errors.some((error: any) => error.code === 'file-too-large')) {
          errorMessage = t('AddPhotoErrorText1')
        } else {
          errorMessage = t('AddPhotoErrorText2')
        }
      })
    }

    if (errorMessage) {
      setTextErrorModal?.(errorMessage)
    }
  }

  return useDropzone({
    accept: { 'image/jpeg': [], 'image/png': [] },
    maxSize: 2 * 1024 * 1024, // 2 MB
    onDrop,
    onDropRejected,
  })
}
