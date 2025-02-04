import { useState } from 'react'
import { Area } from 'react-easy-crop'

export const useCroppSettings = () => {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [aspect, setAspect] = useState<number | undefined>(undefined)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null)
  const [rotation, setRotation] = useState(0)

  return {
    aspect,
    crop,
    croppedAreaPixels,
    rotation,
    setAspect,
    setCrop,
    setCroppedAreaPixels,
    setRotation,
    setZoom,
    zoom,
  }
}
