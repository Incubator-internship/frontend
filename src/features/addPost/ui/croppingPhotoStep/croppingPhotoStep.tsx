import { Dispatch, SetStateAction, useState } from 'react'

import { FileWithPreview } from '@/features/addPost/ui/createPost/CreatePost'
import { PhotoEditorPanel } from '@/features/addPost/ui/croppingPhotoStep/croppingPhotoItem/PhotoEditorPanel'
import { CroppingPhotoItem } from '@/features/addPost/ui/croppingPhotoStep/croppingPhotoItem/croppingPhotoItem'
import { mapPhotosToCarouselItems } from '@/features/addPost/utils/photoUtils'
import { Carousel } from '@/shared/ui/carousel'

import s from './croppingPhotoStep.module.scss'

import { useCroppSettings } from './croppingPhotoItem/hooks/useCroppSettings'

type Props = {
  images: FileWithPreview[]
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
  const [idCurrentImage, setIdCurrentImage] = useState<string>(images.length ? images[0].id : '')

  const photosForCarousel = mapPhotosToCarouselItems(images)

  return (
    <div className={s.modalWrapp}>
      <div className={s.items}>
        {images.length > 0 && (
          <Carousel
            idCurrentImage={idCurrentImage}
            photos={photosForCarousel}
            setIdCurrentImage={setIdCurrentImage}
          />
        )}

        <PhotoEditorPanel
          images={images}
          setAspect={setAspect}
          setImageWithPreview={setImageWithPreview}
          setZoom={setZoom}
          zoom={zoom}
        />
        {/*{images.map((image, index) => (*/}
        {/*  <CroppingPhotoItem*/}
        {/*    aspect={aspect}*/}
        {/*    crop={crop}*/}
        {/*    croppedAreaPixels={croppedAreaPixels}*/}
        {/*    image={image}*/}
        {/*    images={images}*/}
        {/*    key={`${image.id}_${index}`}*/}
        {/*    rotation={rotation}*/}
        {/*    setAspect={setAspect}*/}
        {/*    setCrop={setCrop}*/}
        {/*    setCroppedAreaPixels={setCroppedAreaPixels}*/}
        {/*    setImageWithPreview={setImageWithPreview}*/}
        {/*    setZoom={setZoom}*/}
        {/*    zoom={zoom}*/}
        {/*  />*/}
        {/*))}*/}
      </div>
    </div>
  )
}
