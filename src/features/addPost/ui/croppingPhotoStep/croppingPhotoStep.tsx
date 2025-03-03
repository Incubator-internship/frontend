import { Dispatch, SetStateAction } from 'react'

import { FileWithPreview } from '@/features/addPost/ui/createPost/CreatePost'
import { PhotoEditorPanel } from '@/features/addPost/ui/croppingPhotoStep/croppingPhotoItem/PhotoEditorPanel'
import { mapPhotosToCarouselItems } from '@/features/addPost/utils/photoUtils'
import { Carousel } from '@/shared/ui/carousel'

import s from './croppingPhotoStep.module.scss'

import { useCroppSettings } from './croppingPhotoItem/hooks/useCroppSettings'

type Props = {
  images: FileWithPreview[]
  onSaveCroppedImage: (newImgWithPreview: FileWithPreview) => void
  setImageWithPreview: Dispatch<SetStateAction<FileWithPreview[]>>
  setTextErrorModal?: (error: string) => void
}

export const CroppingPhotoStep = ({
  images,
  onSaveCroppedImage,
  setImageWithPreview,
  setTextErrorModal,
}: Props) => {
  const {
    aspect,
    crop,
    croppedAreaPixels,
    setAspect,
    setCrop,
    setCroppedAreaPixels,
    setZoom,
    zoom,
  } = useCroppSettings()

  const photosForCarousel = mapPhotosToCarouselItems(images)

  return (
    <div className={s.modalWrapp}>
      <div className={s.items}>
        <Carousel photos={photosForCarousel} />
        <PhotoEditorPanel
          aspect={aspect}
          crop={crop}
          croppedAreaPixels={croppedAreaPixels}
          images={images}
          setAspect={setAspect}
          setCrop={setCrop}
          setCroppedAreaPixels={setCroppedAreaPixels}
          setImageWithPreview={setImageWithPreview}
          setTextErrorModal={setTextErrorModal}
          setZoom={setZoom}
          zoom={zoom}
        />
      </div>
    </div>
  )
}
