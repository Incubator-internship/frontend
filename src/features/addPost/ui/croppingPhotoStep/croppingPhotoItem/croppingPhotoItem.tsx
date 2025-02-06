import { Dispatch, SetStateAction } from 'react'
import Cropper, { Area } from 'react-easy-crop'

import { FileWithPreview } from '@/features/addPost/ui/createPost/CreatePost'
import { useCroppSettings } from '@/features/addPost/ui/croppingPhotoStep/croppingPhotoItem/hooks/useCroppSettings'
import { getCroppedImg } from '@/shared/utils/cropImageUtils'

import s from './croppingPhotoItem.module.scss'

import { PhotoEditorPanel } from './PhotoEditorPanel'

type Props = {
  // aspect?: number
  // crop?: { x: number; y: number }
  // croppedAreaPixels?: Area | null
  image: FileWithPreview //удалить, оставить только images, когда реализуем выбор imag, которую будем кропать по id
  // images: FileWithPreview[]
  // rotation?: number
  // setAspect?: Dispatch<SetStateAction<number>>
  // setCrop?: Dispatch<SetStateAction<{ x: number; y: number }>>
  // setCroppedAreaPixels: Dispatch<SetStateAction<Area | null>>
  setImageWithPreview: Dispatch<SetStateAction<FileWithPreview[]>>
  // setZoom?: Dispatch<SetStateAction<number>>
  // zoom?: number
}

export const CroppingPhotoItem = ({ image, setImageWithPreview }: Props) => {
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

  const onCropComplete = async (croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }

  const saveCroppedImage = async () => {
    try {
      const croppedImage = await getCroppedImg(
        image.preview as string,
        croppedAreaPixels as Area,
        rotation
      )
      const file = new File([croppedImage as BlobPart], 'name')

      const newImgWithPreview: FileWithPreview = {
        ...file,
        id: image.id,
        preview: URL.createObjectURL(file),
      }

      setImageWithPreview(prevImages => [...prevImages, newImgWithPreview])
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div>
      <div className={s.item}>
        <Cropper
          aspect={aspect}
          crop={crop ?? { x: 0, y: 0 }}
          image={image.preview}
          onCropChange={setCrop ?? (() => {})}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
          zoom={zoom}
        />
      </div>
      {/*<ImageCropp*/}
      {/*  images={images}*/}
      {/*  setAspect={rest.setAspect}*/}
      {/*  setImageWithPreview={setImageWithPreview}*/}
      {/*  setZoom={rest.setZoom}*/}
      {/*  zoom={rest.zoom}*/}
      {/*/>*/}
    </div>
  )
}
