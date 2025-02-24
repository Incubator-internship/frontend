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
