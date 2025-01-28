import { ChangeEvent, Dispatch, SetStateAction, useId, useState } from 'react'
import Cropper, { Area } from 'react-easy-crop'

import { AddingWindow } from '@/features/addPost/ui/addingWindow/AddingWindow'
import { FileWithPreview } from '@/features/addPost/ui/createPost/CreatePost'
import Cropping from '@/shared/assets/icons/Cropping'
import ImageIcon from '@/shared/assets/icons/ImageIcon'
import Scale from '@/shared/assets/icons/Scale'
import { Button } from '@/shared/ui/button'
import { getCroppedImg } from '@/shared/utils/cropImageUtils'

import s from './croppingPhotoItem.module.scss'

type Props = {
  image: FileWithPreview //удалить, оставить только images, когда реализуем выбор imag, которую будем кропать по id
  images: FileWithPreview[]
  setImageWithPreview: Dispatch<SetStateAction<FileWithPreview[]>>
}

export const CroppingPhotoItem = ({ image, images, setImageWithPreview }: Props) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [aspect, setAspect] = useState(1 / 1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null)
  const [rotation, setRotation] = useState(0)
  const imageId = useId()
  // const [addedImages, setAddedImages] = useState<string[]>([])
  const [showAddingWindow, setShowAddingWindow] = useState<boolean>(false)

  // const dispatch = useAppDispatch()

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

  const handleShowAddingWindow = () => {
    console.log('click on the icon')
    setShowAddingWindow(!showAddingWindow)
  }

  return (
    <div>
      <div className={s.item}>
        <Cropper
          aspect={aspect}
          crop={crop}
          image={image.preview}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
          zoom={zoom}
        />
      </div>
      <div>
        <div className={s.imagesSettings}>
          <div className={s.imagesSettingsWrapp}>
            <div className={s.settingsBtn}>
              <Cropping />
            </div>
            <div className={s.settingsBtn}>
              <Scale />
            </div>
          </div>
          <div className={s.settingsBtn} onClick={handleShowAddingWindow}>
            <ImageIcon height={24} width={24} />
          </div>
        </div>
        <div className={s.settingsScale}>
          <input
            aria-labelledby={'Zoom'}
            className={'zoom-range'}
            max={3}
            min={1}
            onChange={e => {
              setZoom(+e.target.value)
            }}
            step={0.1}
            type={'range'}
            value={zoom}
          />
        </div>
        <div className={s.settingsCrop}>
          <div className={s.settingsCropBtn} onClick={() => setAspect(1 / 1)}>
            1/1
          </div>
          <div className={s.settingsCropBtn} onClick={() => setAspect(4 / 5)}>
            4/5
          </div>
          <div className={s.settingsCropBtn} onClick={() => setAspect(16 / 9)}>
            16/9
          </div>
        </div>
        <Button className={s.BtbBtn} onClick={saveCroppedImage}>
          save
        </Button>

        {showAddingWindow && (
          <AddingWindow images={images} setImageWithPreview={setImageWithPreview} />
        )}
      </div>
    </div>
  )
}
