import { Photos } from '@/app/api/posts/postsApi.types'
import { FileWithPreview } from '@/features/addPost/ui/createPost/CreatePost'
import { v4 as uuidv4 } from 'uuid'

export function mapPhotosToCarouselItems(photos: FileWithPreview[]): Photos[] {
  return photos.map(photo => ({ id: photo.id, postId: uuidv4(), url: photo.preview }))
}

export const convertPreviewToFile = async (image: FileWithPreview): Promise<File> => {
  const response = await fetch(image.preview)
  const blob = await response.blob()

  return new File([blob], image.path || 'photo.jpg', { type: blob.type })
}

export const applyFilterToImage = async (imageUrl: string, filter: string): Promise<File> => {
  return new Promise((resolve, reject) => {
    const img = new Image()

    img.crossOrigin = 'anonymous'
    img.src = imageUrl
    img.onload = () => {
      const canvas = document.createElement('canvas')

      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')

      if (!ctx) {
        return reject(new Error('Canvas context not available'))
      }
      ctx.filter = filter
      ctx.drawImage(img, 0, 0)
      canvas.toBlob(blob => {
        if (blob) {
          const file = new File([blob], 'filtered_image.png', {
            type: blob.type,
          })

          resolve(file)
        } else {
          reject(new Error('Failed to create blob'))
        }
      }, 'image/png')
    }
    img.onerror = err => reject(err)
  })
}
