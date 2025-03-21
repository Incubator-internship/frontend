import React, { Dispatch, SetStateAction } from 'react'
import Cropper from 'react-easy-crop'

import s from './avatarUploadModal.module.scss'

type Props = {
  image: string
  setCroppedAreaPixels: Dispatch<
    SetStateAction<{ height: number; width: number; x: number; y: number } | null>
  >
}

export const CroppAvatar = ({ image, setCroppedAreaPixels }: Props) => {
  const [crop, setCrop] = React.useState({ x: 0, y: 0 })
  const [zoom, setZoom] = React.useState(1)

  const onCropChange = (crop: { x: number; y: number }) => {
    setCrop(crop)
  }

  const onCropComplete = (croppedAreaPixels: {
    height: number
    width: number
    x: number
    y: number
  }) => {
    // console.log(croppedAreaPixels)
    setCroppedAreaPixels(croppedAreaPixels)
  }

  const onZoomChange = (zoom: number) => {
    setZoom(zoom)
  }

  return (
    <div className={s.cropper}>
      <Cropper
        aspect={1}
        crop={crop}
        cropShape={'round'}
        image={image}
        objectFit={'cover'}
        onCropChange={onCropChange}
        onCropComplete={onCropComplete}
        onZoomChange={onZoomChange}
        showGrid={false}
        zoom={zoom}
      />
    </div>
  )
}
