import { useEffect, useState } from 'react'
import { FileWithPath } from 'react-dropzone'

import Cropping from '@/shared/assets/icons/Cropping'
import ImageIcon from '@/shared/assets/icons/ImageIcon'
import Scale from '@/shared/assets/icons/Scale'
import Image from 'next/image'

import s from './croppingPhotoStep.module.scss'

type Props = {
  images: FileWithPath[]
}

type FileWithPreview = { preview: string } & FileWithPath

export const CroppingPhotoStep = ({ images }: Props) => {
  const [files, setFiles] = useState<FileWithPreview[] | null>([])

  useEffect(() => {
    setFiles(
      images.map(image =>
        Object.assign(image, {
          preview: URL.createObjectURL(image),
        })
      )
    )

    // return () => images.forEach(image => URL.revokeObjectURL(image.preview))
  }, [images])

  return (
    <div className={s.modalWrapp}>
      {files?.map(file => (
        <div key={file.name}>
          <img
            alt={file.name}
            onLoad={() => {
              URL.revokeObjectURL(file.preview)
            }}
            src={file.preview}
          />
        </div>
      ))}
      <div className={s.imagesSettings}>
        <div className={s.imagesSettingsWrapp}>
          <div className={s.settingsBtn}>
            <Cropping />
          </div>
          <div className={s.settingsBtn}>
            <Scale />
          </div>
        </div>
        <div className={s.settingsBtn}>
          <ImageIcon height={24} width={24} />
        </div>
      </div>
    </div>
  )
}
