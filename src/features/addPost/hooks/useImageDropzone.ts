import { Dispatch, SetStateAction } from 'react'
import { FileWithPath, useDropzone } from 'react-dropzone'

import { FileWithPreview } from '@/features/addPost/ui/createPost/CreatePost'
import { useTranslations } from 'next-intl'
import { v4 as uuidv4 } from 'uuid'

export const MAX_IMAGES = 10

type UseDropzoneOptions = {
  image?: FileWithPreview
  images?: FileWithPreview[]
  setImages: Dispatch<SetStateAction<FileWithPreview[]>>
  setTextErrorModal?: (error: string) => void
}

export const useImageDropzone = ({
  image,
  images,
  setImages,
  setTextErrorModal,
}: UseDropzoneOptions) => {
  const t = useTranslations('AddPostModal')

  const onDrop = (acceptedFiles: File[]) => {
    if (images && images.length + acceptedFiles.length > MAX_IMAGES) {
      setTextErrorModal?.(`${t('AddPhotoErrorText3')} - ${MAX_IMAGES}`)

      return
    }

    const newImages = acceptedFiles.map(
      (file: FileWithPath): FileWithPreview => ({
        ...file,
        id: uuidv4(),
        preview: URL.createObjectURL(file),
      })
    )

    if (images) {
      setImages([...images, ...newImages])
    } else if (image && acceptedFiles.length > 0) {
      // const chosenImage = newImages[0]
    }
  }

  const onDropRejected = (fileRejections: any) => {
    let errorMessage = ''

    if (images) {
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
