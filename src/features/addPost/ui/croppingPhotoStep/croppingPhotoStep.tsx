import { FileWithPreview } from '@/features/addPost/ui/createPost/CreatePost'
import { CroppingPhotoItem } from '@/features/addPost/ui/croppingPhotoStep/croppingPhotoItem/croppingPhotoItem'

import s from './croppingPhotoStep.module.scss'

type Props = {
  images: FileWithPreview[]
}

export const CroppingPhotoStep = ({ images }: Props) => {
  console.log('croppingImages', images)

  return (
    <div className={s.modalWrapp}>
      <div className={s.items}>
        {images.map(image => (
          <CroppingPhotoItem image={image} key={image.id} />
        ))}
      </div>
    </div>
  )
}
