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
  // const {
  //   aspect,
  //   crop,
  //   croppedAreaPixels,
  //   rotation,
  //   setAspect,
  //   setCrop,
  //   setCroppedAreaPixels,
  //   setZoom,
  //   zoom,
  // } = useCroppSettings()
  const [idCurrentImage, setIdCurrentImage] = useState<string>(images.length ? images[0].id : '')
  const [isEditPhoto, setIsEditPhoto] = useState(false)

  const photosForCarousel = mapPhotosToCarouselItems(images)
  const editedPhoto = images.find(image => image.id === idCurrentImage)

  console.log('isEditPhoto', isEditPhoto)

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

        {isEditPhoto && editedPhoto && (
          <CroppingPhotoItem image={editedPhoto} setImageWithPreview={setImageWithPreview} />
        )}
        <PhotoEditorPanel
          images={images}
          // setAspect={setAspect}
          setImageWithPreview={setImageWithPreview}
          setIsEditPhoto={setIsEditPhoto}
          // setZoom={setZoom}
          // zoom={zoom}
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
