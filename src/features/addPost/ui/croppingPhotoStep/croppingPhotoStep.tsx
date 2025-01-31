import { Dispatch, SetStateAction } from 'react'

import { FileWithPreview } from '@/features/addPost/ui/createPost/CreatePost'
import { CroppingPhotoItem } from '@/features/addPost/ui/croppingPhotoStep/croppingPhotoItem/croppingPhotoItem'

import s from './croppingPhotoStep.module.scss'

import { useCroppSettings } from './croppingPhotoItem/hooks/useCroppSettings'

type Props = {
  images: FileWithPreview[]
  onSaveCroppedImage: (newImgWithPreview: FileWithPreview) => void
  setImageWithPreview: Dispatch<SetStateAction<FileWithPreview[]>>
}

export const CroppingPhotoStep = ({ images, setImageWithPreview }: Props) => {
  const {
    aspect,
    crop,
    croppedAreaPixels,
    rotation,
    setAspect,
    setCrop,
    setCroppedAreaPixels,
    setZoom,
    zoom,
  } = useCroppSettings()

  console.log('croppingImages', images)

  return (
    <div className={s.modalWrapp}>
      <div className={s.items}>
        {images.map((image, index) => (
          <CroppingPhotoItem
            aspect={aspect}
            crop={crop}
            croppedAreaPixels={croppedAreaPixels}
            image={image}
            images={images}
            key={`${image.id}_${index}`}
            rotation={rotation}
            setAspect={setAspect}
            setCrop={setCrop}
            setCroppedAreaPixels={setCroppedAreaPixels}
            setImageWithPreview={setImageWithPreview}
            setZoom={setZoom}
            zoom={zoom}
          />
        ))}
      </div>
      <button type={'button'}>123</button>
    </div>
  )
}
