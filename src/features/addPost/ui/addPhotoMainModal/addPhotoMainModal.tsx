import { useDropzone } from 'react-dropzone'

import { useAppDispatch, useAppSelector } from '@/app/config/store/store'
import { addImages } from '@/features/addPost/model/postSlice'
import ImageIcon from '@/shared/assets/icons/ImageIcon'
import { Button } from '@/shared/ui/button'
import { useTranslations } from 'next-intl'

import s from './addPhotoMainModal.module.scss'

export const AddPhotoMainModal = () => {
  const t = useTranslations('AddPostModal')
  const dispatch = useAppDispatch()

  const { acceptedFiles, getInputProps, getRootProps, open } = useDropzone({
    onDrop: acceptedFiles => {
      dispatch(addImages(acceptedFiles))
    },
  })

  return (
    <div className={s.modalWrapp}>
      <div>
        <div {...getRootProps({ className: s.dropzone })}>
          <input {...getInputProps()} />
          <ImageIcon />
        </div>
        {/*<ul>*/}
        {/*  {files.map(file => (*/}
        {/*    <li key={file.path}>*/}
        {/*      {file.path} - {file.size} bytes*/}
        {/*    </li>*/}
        {/*  ))}*/}
        {/*</ul>*/}
      </div>
      <Button className={s.btn} fullWidth onClick={open}>
        {t('MainModalBtn1')}
      </Button>
      <Button disabled fullWidth onClick={() => {}} variant={'transparent'}>
        {t('MainModalBtn2')}
      </Button>
    </div>
  )
}
