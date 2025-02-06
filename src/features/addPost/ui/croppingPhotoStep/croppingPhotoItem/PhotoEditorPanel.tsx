import React, { Dispatch, SetStateAction, useState } from 'react'

import AddImageIcon from '@/shared/assets/icons/AddImageIcon'
import Crop11 from '@/shared/assets/icons/Crop11'
import Crop45 from '@/shared/assets/icons/Crop45'
import Crop169 from '@/shared/assets/icons/Crop169'
import Cropping from '@/shared/assets/icons/Cropping'
import ImageIcon from '@/shared/assets/icons/ImageIcon'
import Scale from '@/shared/assets/icons/Scale'

import s from './croppingPhotoItem.module.scss'

import { AddingWindow } from '../../addingWindow/AddingWindow'
import { FileWithPreview } from '../../createPost/CreatePost'

type Props = {
  images: FileWithPreview[]
  setAspect?: Dispatch<SetStateAction<number>>
  setImageWithPreview: Dispatch<SetStateAction<FileWithPreview[]>>
  setZoom?: Dispatch<SetStateAction<number>>
  zoom?: number
}

export const PhotoEditorPanel = ({
  images,
  setAspect,
  setImageWithPreview,
  setZoom,
  zoom,
}: Props) => {
  const [showAddingWindow, setShowAddingWindow] = useState<boolean>(false)
  const [showScaleWindow, setShowScaleWindow] = useState<boolean>(false)
  const [showCroppingWindow, setShowCroppingWindow] = useState<boolean>(false)
  const handleShowAddingWindow = () => {
    setShowAddingWindow(!showAddingWindow)
  }

  return (
    <div>
      <div className={s.imagesSettings}>
        <div className={s.imagesSettingsWrapp}>
          <div className={s.settingsBtn} onClick={() => setShowCroppingWindow(!showCroppingWindow)}>
            <Cropping />
          </div>
          <div className={s.settingsBtn} onClick={() => setShowScaleWindow(!showScaleWindow)}>
            <Scale />
          </div>
        </div>
        <div className={s.settingsBtn} onClick={handleShowAddingWindow}>
          <AddImageIcon fill={'white'} />
        </div>
      </div>
      {showScaleWindow && (
        <div className={s.settingsScale}>
          <input
            aria-labelledby={'Zoom'}
            className={'zoom-range'}
            max={3}
            min={1}
            onChange={e => {
              setZoom?.(+e.target.value)
            }}
            step={0.1}
            type={'range'}
            value={zoom}
          />
        </div>
      )}
      {showCroppingWindow && (
        <div className={s.settingsCrop}>
          <div className={s.settingsCropBtn} onClick={() => setAspect?.(1 / 1)}>
            1/1
            <Crop11 />
          </div>
          <div className={s.settingsCropBtn} onClick={() => setAspect?.(4 / 5)}>
            4/5
            <Crop45 />
          </div>
          <div className={s.settingsCropBtn} onClick={() => setAspect?.(16 / 9)}>
            16/9
            <Crop169 />
          </div>
        </div>
      )}
      {showAddingWindow && (
        <AddingWindow images={images} setImageWithPreview={setImageWithPreview} />
      )}
    </div>
  )
}
