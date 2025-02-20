import type { FileWithPreview, FormData } from '../createPost/CreatePost'

import React from 'react'
import { useFormContext } from 'react-hook-form'

import image1 from '@/shared/assets/images/publicImages/image1.webp'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar'
import { Carousel } from '@/shared/ui/carousel'
import { TextareaWithControl } from '@/shared/ui/textareaControl'
import { Typography } from '@/shared/ui/typography'
import clsx from 'clsx'

import s from './publishPhotoStep.module.scss'

import { mapPhotosToCarouselItems } from '../../utils/photoUtils'

type Props = {
  images?: FileWithPreview[]
  onSubmit?: (data: FormData) => void
}

export default function PublushPhotoStep({ images }: Props) {
  const { control, watch } = useFormContext<FormData>()
  const descriptionValue = watch('description') || ''
  const photosForCarousel = mapPhotosToCarouselItems(images ?? [])

  return (
    <div>
      <div className={s.wrapper}>
        <Carousel photos={photosForCarousel} />
        <div className={s.userPostWrapper}>
          <div className={s.userPost}>
            <div className={s.userProfile}>
              <Avatar>
                <AvatarImage alt={'ava'} src={image1.src} />
                <AvatarFallback>404</AvatarFallback>
              </Avatar>
              <Typography className={s.profileTitle} variant={'h3'}>
                URLProfile
              </Typography>
            </div>
            <form>
              <TextareaWithControl
                control={control}
                label={'Add publication descriptions'}
                name={'description'}
                placeholder={'Text-area'}
              />
              <Typography className={clsx(s.count)} variant={'body2'}>
                {`${descriptionValue.length}/500`}
              </Typography>
            </form>
          </div>
          <div className={s.userLocation}>
            <Typography as={'span'} className={s.locationCity} variant={'caption'}>
              Add location
            </Typography>
            <Typography className={s.locationDetail} variant={'regularText14'}>
              New York
            </Typography>
            <Typography className={s.locationBox}>
              New York
              <Typography className={s.subTitle}>Washington Square Park</Typography>
            </Typography>
            <Typography className={s.locationBox}>
              New York
              <Typography className={s.subTitle}>Washington Square Park</Typography>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}
