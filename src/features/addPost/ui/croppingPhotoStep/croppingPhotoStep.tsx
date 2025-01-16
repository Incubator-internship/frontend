import { CroppingPhotoItem } from '@/features/addPost/ui/croppingPhotoStep/croppingPhotoItem/croppingPhotoItem'
import { FileWithPreview } from '@/views/profile/ui/Profile'

import s from './croppingPhotoStep.module.scss'

type Props = {
  images: FileWithPreview[] | null
}

export const CroppingPhotoStep = ({ images }: Props) => {
  return (
    <div className={s.modalWrapp}>
      <div className={s.items}>
        {images?.map(image => <CroppingPhotoItem image={image} key={image.name} />)}
      </div>
    </div>
  )
}
