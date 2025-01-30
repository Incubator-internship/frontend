import { Dispatch, SetStateAction } from 'react'
import Cropper, { Area } from 'react-easy-crop'

import { FileWithPreview } from '@/features/addPost/ui/createPost/CreatePost'
import { getCroppedImg } from '@/shared/utils/cropImageUtils'

import s from './croppingPhotoItem.module.scss'

import { ImageCropp } from './ImageCropp'

type Props = {
  aspect?: number
  crop?: { x: number; y: number }
  croppedAreaPixels?: Area | null
  image: FileWithPreview //удалить, оставить только images, когда реализуем выбор imag, которую будем кропать по id
  images: FileWithPreview[]
  rotation?: number
  setAspect?: Dispatch<SetStateAction<number>>
  setCrop?: Dispatch<SetStateAction<{ x: number; y: number }>>
  setCroppedAreaPixels: Dispatch<SetStateAction<Area | null>>
  setImageWithPreview: Dispatch<SetStateAction<FileWithPreview[]>>
  setZoom?: Dispatch<SetStateAction<number>>
  zoom?: number
}

export const CroppingPhotoItem = ({ image, images, setImageWithPreview, ...rest }: Props) => {
  const onCropComplete = async (croppedArea: Area, croppedAreaPixels: Area) => {
    rest.setCroppedAreaPixels(croppedAreaPixels)
  }

  const saveCroppedImage = async () => {
    try {
      const croppedImage = await getCroppedImg(
        image.preview as string,
        rest.croppedAreaPixels as Area,
        rest.rotation
      )
      const file = new File([croppedImage as BlobPart], 'name')

      // onSaveCroppedImage(newImgWithPreview)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div>
      <div className={s.item}>
        <Cropper
          aspect={rest.aspect}
          crop={rest.crop ?? { x: 0, y: 0 }}
          image={image.preview}
          onCropChange={rest.setCrop ?? (() => {})}
          onCropComplete={onCropComplete}
          onZoomChange={rest.setZoom}
          zoom={rest.zoom}
        />
      </div>
      <ImageCropp
        images={images}
        setAspect={rest.setAspect}
        setImageWithPreview={setImageWithPreview}
        setZoom={rest.setZoom}
        zoom={rest.zoom}
      />
    </div>
  )
}
