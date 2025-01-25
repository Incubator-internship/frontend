import { ChangeEvent, Dispatch, SetStateAction, useId } from 'react'

import { MAX_IMAGES } from '@/features/addPost/ui/addPhotoMainModal/addPhotoMainModal'
import { FileWithPreview } from '@/features/addPost/ui/createPost/CreatePost'
import CloseIcon from '@/shared/assets/icons/CloseIcon'
import PlusCircleOutlineIcon from '@/shared/assets/icons/PlusCircleOutlineIcon'
import { v4 as uuidv4 } from 'uuid'

import s from './addingWindow.module.scss'

type Props = {
  images: FileWithPreview[]
  setImageWithPreview: Dispatch<SetStateAction<FileWithPreview[]>>
}

export function AddingWindow({ images, setImageWithPreview }: Props) {
  const addImages = (e: ChangeEvent<HTMLInputElement>) => {
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
        id: uuidv4(),
        preview: URL.createObjectURL(file),
      })
    )

    setImageWithPreview(prevImages => [...prevImages, ...newImages])
  }
  const deleteImage = (id: string) => {
    setImageWithPreview(prevState => prevState.filter(image => image.id !== id))
  }

  return (
    <div className={s.addingWindow}>
      <div className={s.addedImages}>
        {images.map((img, index) => (
          <div className={s.addedImage} key={img.id}>
            <img alt={`Added ${index + 1}`} src={img.preview} />
            <button className={s.deleteButton} onClick={() => deleteImage(img.id)} type={'button'}>
              <CloseIcon />
            </button>
          </div>
        ))}
      </div>
      <div className={s.addItem}>
        <input
          accept={'image/jpeg, image/png'}
          id={'add-image-input'}
          multiple
          onChange={addImages}
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
