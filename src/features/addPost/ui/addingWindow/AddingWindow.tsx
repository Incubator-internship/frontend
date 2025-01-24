import { ChangeEvent, Dispatch, SetStateAction, useId } from 'react'

import { MAX_IMAGES } from '@/features/addPost/ui/addPhotoMainModal/addPhotoMainModal'
import { FileWithPreview } from '@/features/addPost/ui/createPost/CreatePost'
import PlusCircleOutlineIcon from '@/shared/assets/icons/PlusCircleOutlineIcon'

import s from './addingWindow.module.scss'

type Props = {
  images: FileWithPreview[]
  setImageWithPreview: Dispatch<SetStateAction<FileWithPreview[]>>
}

export function AddingWindow({ images, setImageWithPreview }: Props) {
  const imageId = useId()
  const handleAddImages = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return
    }
    const selectedFiles = Array.from(e.target.files)

    if (images.length + selectedFiles.length > MAX_IMAGES) {
      alert(`You can only add up to ${MAX_IMAGES} images.`)

      return
    }

    const newImages = selectedFiles.map(
      (file): FileWithPreview => ({
        ...file,
        id: imageId,
        preview: URL.createObjectURL(file),
      })
    )

    setImageWithPreview(prevImages => [...prevImages, ...newImages])
  }

  return (
    <div className={s.addingWindow}>
      <div className={s.addedImages}>
        {images.map((img, index) => (
          <div className={s.addedImage} key={img.id}>
            <img alt={`Added ${index + 1}`} src={img.preview} />
          </div>
        ))}
      </div>
      <div className={s.addItem}>
        <input
          accept={'image/jpeg, image/png'}
          id={'add-image-input'}
          multiple
          onChange={handleAddImages}
          style={{ display: 'none' }}
          type={'file'}
        />
        <label className={s.addImageLabel} htmlFor={'add-image-input'}>
          <PlusCircleOutlineIcon />
        </label>
      </div>
    </div>
  )
}
