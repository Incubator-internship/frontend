import { FileWithPreview } from '@/features/addPost/ui/createPost/CreatePost'

export const mapImagesForServer = (images: FileWithPreview[]): File[] => {
  return images.map(el => new File([new Blob([el], { type: el.type })], el.name, { type: el.type }))
}
