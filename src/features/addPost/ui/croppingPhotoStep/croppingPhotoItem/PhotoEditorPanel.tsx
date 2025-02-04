import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
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
  aspect: number | undefined
  crop: { x: number; y: number }
  croppedAreaPixels: Area | null
  images: FileWithPreview[]
  setAspect?: Dispatch<SetStateAction<number | undefined>>
  setCrop: Dispatch<SetStateAction<{ x: number; y: number }>>
  setCroppedAreaPixels: Dispatch<SetStateAction<Area | null>>
  setImageWithPreview: Dispatch<SetStateAction<FileWithPreview[]>>
  setZoom?: Dispatch<SetStateAction<number>>
  zoom?: number
}

export const PhotoEditorPanel = ({
  aspect,
  crop,
  croppedAreaPixels,
  images,
  setAspect,
  setCrop,
  setCroppedAreaPixels,
  setImageWithPreview,
  setZoom,
  zoom,
}: Props) => {
  const [originalImages, setOriginalImages] = useState<Map<string, string>>(new Map())
  const [showAddingWindow, setShowAddingWindow] = useState<boolean>(false)
  const [showScaleWindow, setShowScaleWindow] = useState<boolean>(false)
  const [showCroppingWindow, setShowCroppingWindow] = useState<boolean>(false)

  const onCropComplete = async (croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }

  const showCroppedImage = async () => {
    try {
      const imageToEdit = images.find(img => img.id)

      if (!imageToEdit || !croppedAreaPixels) {
        return
      }

      if (!originalImages.has(imageToEdit.id)) {
        setOriginalImages(prev => new Map(prev).set(imageToEdit.id, imageToEdit.preview))
      }

      const croppedImage = await getCroppedImg(imageToEdit.preview, croppedAreaPixels)

      if (!croppedImage) {
        return
      }

      console.log('donee', { croppedImage })

      setImageWithPreview(prevImages =>
        prevImages.map(img => (img.id === imageToEdit.id ? { ...img, preview: croppedImage } : img))
      )
    } catch (e) {
      console.error(e)
    }
  }
  const resetToOriginal = () => {
    setImageWithPreview(prevImages =>
      prevImages.map(img =>
        originalImages.has(img.id) ? { ...img, preview: originalImages.get(img.id)! } : img
      )
    )
    setCrop({ x: 0, y: 0 })
    setZoom?.(1)
    setAspect?.(undefined)
  }

  const handleSaveAspect = () => {
    showCroppedImage()
  }
  const handleSaveZoom = () => {
    showCroppedImage()
  }

  return (
    <div>
      {(showCroppingWindow || showScaleWindow) &&
        images?.map(image => (
          <Cropper
            aspect={aspect}
            crop={crop}
            image={image.preview}
            key={image.id}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            // showGrid={false}
            zoom={zoom}
          />
        ))}
      <div className={s.imagesSettings}>
        <div className={s.imagesSettingsWrapp}>
          <div className={s.settingsBtn} onClick={() => setShowCroppingWindow(!showCroppingWindow)}>
            <Cropping />
          </div>
          <div className={s.settingsBtn} onClick={() => setShowScaleWindow(!showScaleWindow)}>
            <Scale />
          </div>
        </div>
        <div className={s.settingsBtn} onClick={() => setShowAddingWindow(!showAddingWindow)}>
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
            onChange={e => {
              setZoom?.(+e.target.value), handleSaveZoom()
            }}
            step={0.1}
            type={'range'}
            value={zoom}
          />
        </div>
      )}
      {showCroppingWindow && (
        <div className={s.settingsCrop}>
          <div className={s.settingsCropBtn} onClick={resetToOriginal}>
            Original
          </div>
          <div
            className={s.settingsCropBtn}
            onClick={() => {
              setAspect?.(1 / 1), handleSaveAspect()
            }}
          >
            1/1
            <Crop11 />
          </div>
          <div
            className={s.settingsCropBtn}
            onClick={() => {
              setAspect?.(4 / 5), handleSaveAspect()
            }}
          >
            4/5
            <Crop45 />
          </div>
          <div
            className={s.settingsCropBtn}
            onClick={() => {
              setAspect?.(16 / 9), handleSaveAspect()
            }}
          >
            16/9
            <Crop169 />
          </div>
        </div>
      )}
      {showAddingWindow && (
        <AddingWindow images={images} setImageWithPreview={setImageWithPreview} />
      )}
    </div>
  )
}
