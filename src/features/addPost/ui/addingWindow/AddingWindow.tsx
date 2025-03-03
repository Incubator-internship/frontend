import React, { Dispatch, SetStateAction } from 'react'

import { useImageDropzone } from '@/features/addPost/hooks/useImageDropzone'
import { FileWithPreview } from '@/features/addPost/ui/createPost/CreatePost'
import CloseIcon from '@/shared/assets/icons/CloseIcon'
import PlusCircleOutlineIcon from '@/shared/assets/icons/PlusCircleOutlineIcon'
import Image from 'next/image'

import s from './addingWindow.module.scss'

type Props = {
  images: FileWithPreview[]
  setImageWithPreview: Dispatch<SetStateAction<FileWithPreview[]>>
  setTextErrorModal?: (error: string) => void
}

export function AddingWindow({ images, setImageWithPreview, setTextErrorModal }: Props) {
  const { getInputProps, getRootProps } = useImageDropzone({
    images,
    setImages: setImageWithPreview,
    setTextErrorModal,
  })

  const deleteImage = (id: string) => {
    setImageWithPreview(prevState => prevState.filter(image => image.id !== id))
  }

  return (
    <div className={s.addingWindow}>
      <div className={s.addedImages}>
        {images.map((img, index) => (
          <div className={s.addedImage} key={img.id}>
            <Image alt={`Added ${index + 1}`} height={82} src={img.preview} width={80} />
            <button className={s.deleteButton} onClick={() => deleteImage(img.id)} type={'button'}>
              <CloseIcon />
            </button>
          </div>
        ))}
      </div>
      <div {...getRootProps({ className: s.addItem })}>
        <input {...getInputProps()} />
        <label className={s.addImageLabel} htmlFor={'add-image-input'}>
          <PlusCircleOutlineIcon />
        </label>
      </div>
    </div>
  )
}
