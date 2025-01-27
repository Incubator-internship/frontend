import { Dispatch, SetStateAction } from 'react'

import { FileWithPreview } from '@/features/addPost/ui/createPost/CreatePost'
import { CroppingPhotoItem } from '@/features/addPost/ui/croppingPhotoStep/croppingPhotoItem/croppingPhotoItem'

import s from './croppingPhotoStep.module.scss'

type Props = {
  images: FileWithPreview[]
  setImageWithPreview: Dispatch<SetStateAction<FileWithPreview[]>>
}

export const CroppingPhotoStep = ({ images, setImageWithPreview }: Props) => {
  console.log('croppingImages', images)

  return (
    <div className={s.modalWrapp}>
      <div className={s.items}>
        {images.map((image, index) => (
          <CroppingPhotoItem
            image={image}
            images={images}
            key={`${image.id}_${index}`}
            setImageWithPreview={setImageWithPreview}
          />
        ))}
      </div>
    </div>
  )
}
