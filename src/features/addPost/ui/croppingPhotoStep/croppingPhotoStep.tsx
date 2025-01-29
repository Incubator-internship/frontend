import { Dispatch, SetStateAction } from 'react'

import { FileWithPreview } from '@/features/addPost/ui/createPost/CreatePost'
import { CroppingPhotoItem } from '@/features/addPost/ui/croppingPhotoStep/croppingPhotoItem/croppingPhotoItem'

import s from './croppingPhotoStep.module.scss'

type Props = {
  images: FileWithPreview[]
  onSaveCroppedImage: (newImgWithPreview: FileWithPreview) => void
  setImageWithPreview: Dispatch<SetStateAction<FileWithPreview[]>>
}

export const CroppingPhotoStep = ({ images, onSaveCroppedImage, setImageWithPreview }: Props) => {
  return (
    <div className={s.modalWrapp}>
      <div className={s.items}>
        {images.map(image => (
          <CroppingPhotoItem
            image={image}
            images={images}
            key={image.id}
            onSaveCroppedImage={onSaveCroppedImage}
            setImageWithPreview={setImageWithPreview}
          />
        ))}
      </div>
      <button type={'button'}>123</button>
    </div>
  )
}
