import { ChangeEvent } from 'react'

import s from './addingWindow.module.scss'

type Props = {
  addImage: (e: ChangeEvent<HTMLInputElement>) => void
  addedImages: string[]
}

export function AddingWindow({ addImage, addedImages }: Props) {
  return (
    <div className={s.addingWindow}>
      <div className={s.addedImages}>
        {addedImages.map((img, index) => (
          <div className={s.addedImage} key={index}>
            <img alt={`Added ${index + 1}`} src={img} />
          </div>
        ))}
      </div>
      <div className={s.addItem}>
        <input
          accept={'image/*'}
          id={'add-image-input'}
          onChange={addImage}
          style={{ display: 'none' }}
          type={'file'}
        />
        <label className={s.addImageLabel} htmlFor={'add-image-input'}>
          +
        </label>
      </div>
    </div>
  )
}
