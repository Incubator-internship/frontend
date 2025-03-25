import { createImage } from './createImage'

export const getCroppedImg = async (
  imageSrc: string,
  pixelCrop: { height: number; width: number; x: number; y: number }
): Promise<Blob> => {
  const image = await createImage(imageSrc)
  const canvas = document.createElement('canvas')

  canvas.width = pixelCrop.width
  canvas.height = pixelCrop.height
  const ctx = canvas.getContext('2d')

  if (!ctx) {
    throw new Error('Cannot get canvas context')
  }

  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  )

  return new Promise((resolve, reject) => {
    canvas.toBlob(blob => {
      if (blob) {
        resolve(blob)
      } else {
        reject(new Error('Canvas is empty'))
      }
    }, 'image/jpeg')
  })
}
