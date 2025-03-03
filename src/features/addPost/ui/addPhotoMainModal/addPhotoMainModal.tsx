import { Dispatch, SetStateAction } from 'react'

import { useImageDropzone } from '@/features/addPost/hooks/useImageDropzone'
import { FileWithPreview } from '@/features/addPost/ui/createPost/CreatePost'
import ImageIcon from '@/shared/assets/icons/ImageIcon'
import { Button } from '@/shared/ui/button'
import { useTranslations } from 'next-intl'

import s from './addPhotoMainModal.module.scss'

type Props = {
  images: FileWithPreview[]
  setImages: Dispatch<SetStateAction<FileWithPreview[]>>
  setTextErrorModal?: (error: string) => void
}

export const AddPhotoMainModal = ({ images, setImages, setTextErrorModal }: Props) => {
  const { getInputProps, getRootProps, open } = useImageDropzone({
    images,
    setImages,
    setTextErrorModal,
  })

  const t = useTranslations('AddPostModal')

  return (
    <div className={s.modalWrapp}>
      <div>
        <div {...getRootProps({ className: s.dropzone })}>
          <input {...getInputProps()} />
          <ImageIcon />
        </div>
      </div>

      <Button className={s.btn} fullWidth onClick={open}>
        {t('MainModalBtn1')}
      </Button>
      <Button className={s.btnDraft} disabled fullWidth onClick={() => {}} variant={'transparent'}>
        {t('MainModalBtn2')}
      </Button>
    </div>
  )
}
