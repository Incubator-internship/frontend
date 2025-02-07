import React, { Dispatch, SetStateAction, useState } from 'react'
import Cropper, { Area } from 'react-easy-crop'

import Crop11 from '@/shared/assets/icons/Crop11'
import Crop45 from '@/shared/assets/icons/Crop45'
import Crop169 from '@/shared/assets/icons/Crop169'
import Cropping from '@/shared/assets/icons/Cropping'
import ImageIcon from '@/shared/assets/icons/ImageIcon'
import Scale from '@/shared/assets/icons/Scale'
import { getCroppedImg } from '@/shared/utils/cropImageUtils'

import s from './croppingPhotoItem.module.scss'

import { AddingWindow } from '../../addingWindow/AddingWindow'
import { FileWithPreview } from '../../createPost/CreatePost'

type Props = {
  aspect?: number
  crop?: { x: number; y: number }
  croppedAreaPixels: Area | null
  images: FileWithPreview[]
  publishImages: FileWithPreview[]
  setAspect?: Dispatch<SetStateAction<number>>
  setCrop?: Dispatch<SetStateAction<{ x: number; y: number }>>
  setCroppedAreaPixels: Dispatch<SetStateAction<Area | null>>
  setImageWithPreview: Dispatch<SetStateAction<FileWithPreview[]>>
  setPublishimages: Dispatch<SetStateAction<FileWithPreview[]>>
  setZoom?: Dispatch<SetStateAction<number>>
  zoom?: number
}

export const PhotoEditorPanel = ({
  aspect,
  crop,
  croppedAreaPixels,
  images,
  publishImages,
  setAspect,
  setCrop,
  setCroppedAreaPixels,
  setImageWithPreview,
  setPublishimages,
  setZoom,
  zoom,
}: Props) => {
  const [showAddingWindow, setShowAddingWindow] = useState(false)
  const [showScaleWindow, setShowScaleWindow] = useState(false)
  const [showCroppingWindow, setShowCroppingWindow] = useState(false)
  const [isEditing, setIsEditing] = useState<null | string>(null)

  const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }

  const handleShowAddingWindow = () => {
    setShowAddingWindow(prev => !prev)
  }

  const handleSaveCrop = async () => {
    if (!isEditing || !croppedAreaPixels) {
      return
    }

    const imageToEdit = images.find(img => img.id === isEditing)

    if (!imageToEdit) {
      return
    }

    const croppedImage = await getCroppedImg(imageToEdit.preview, croppedAreaPixels)

    if (!croppedImage) {
      return
    }

    setImageWithPreview(prev =>
      prev.map(img =>
        img.id === isEditing ? { ...img, preview: croppedImage ?? img.preview } : img
      )
    )

    setShowCroppingWindow(!showCroppingWindow)
    setIsEditing(null)
  }

  return (
    <div>
      {images.map(image => (
        <Cropper
          aspect={aspect}
          crop={crop ?? { x: 0, y: 0 }}
          image={image.preview}
          key={image.id}
          onCropChange={location => setCrop?.({ x: location.x, y: location.y })}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
          showGrid={false}
          zoom={zoom}
        />
      ))}

      <div className={s.imagesSettings}>
        <div className={s.imagesSettingsWrapp}>
          <button className={s.settingsBtn} onClick={handleSaveCrop} type={'button'}>
            <Cropping />
          </button>
          <button
            className={s.settingsBtn}
            onClick={() => setShowScaleWindow(prev => !prev)}
            type={'button'}
          >
            <Scale />
          </button>
        </div>
        <div className={s.settingsBtn} onClick={handleShowAddingWindow}>
          <ImageIcon height={24} width={24} />
        </div>
      </div>

      {showScaleWindow && (
        <div className={s.settingsScale}>
          <input
            aria-labelledby={'Zoom'}
            className={'zoom-range'}
            max={3}
            min={1}
            onChange={e => setZoom?.(+e.target.value)}
            step={0.1}
            type={'range'}
            value={zoom}
          />
        </div>
      )}

      {showCroppingWindow && setAspect && (
        <div className={s.settingsCrop}>
          <button className={s.settingsCropBtn} onClick={() => setAspect(1 / 1)} type={'button'}>
            1/1
            <Crop11 />
          </button>
          <button className={s.settingsCropBtn} onClick={() => setAspect(4 / 5)} type={'button'}>
            4/5
            <Crop45 />
          </button>
          <button className={s.settingsCropBtn} onClick={() => setAspect(16 / 9)} type={'button'}>
            16/9
            <Crop169 />
          </button>
        </div>
      )}

      {showAddingWindow && (
        <AddingWindow images={images} setImageWithPreview={setImageWithPreview} />
      )}
    </div>
  )
}
