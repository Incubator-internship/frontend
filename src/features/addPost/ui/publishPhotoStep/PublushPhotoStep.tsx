import type { FileWithPreview } from '../createPost/CreatePost'

import React from 'react'
import { useFormContext } from 'react-hook-form'

import image1 from '@/shared/assets/images/publicImages/image1.webp'
import { PostFormData } from '@/shared/model/schemas/schemas'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar'
import { Carousel } from '@/shared/ui/carousel'
import { TextareaWithControl } from '@/shared/ui/textareaControl'
import { Typography } from '@/shared/ui/typography'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import s from './publishPhotoStep.module.scss'

import { mapPhotosToCarouselItems } from '../../utils/photoUtils'

type Props = {
  images?: FileWithPreview[]
  onSubmit: (data: PostFormData) => void
}

export default function PublushPhotoStep({ images }: Props) {
  const t = useTranslations('AddPostModal')
  const { control, watch } = useFormContext<PostFormData>()
  const descriptionValue = watch('description') || ''
  const photosForCarousel = mapPhotosToCarouselItems(images ?? [])

  return (
    <div>
      <div className={s.wrapper}>
        <Carousel className={s.carousel} photos={photosForCarousel} />
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
                label={t('PublishPhotoLabelTextarea')}
                maxLength={500}
                name={'description'}
              />
              <Typography
                className={clsx(s.count, { [s.maxCharacters]: descriptionValue.length >= 500 })}
                variant={'body2'}
              >
                {`${descriptionValue.length}/500`}
              </Typography>
            </form>
          </div>
          <div className={s.userLocation}>
            <Typography as={'span'} className={s.locationCity} variant={'caption'}>
              {t('PublishPhotoLabelLocation')}
            </Typography>
            <Typography className={s.locationDetail} variant={'regularText14'}>
              New York
            </Typography>
            <Typography as={'div'} className={s.locationBox}>
              New York
              <Typography className={s.subTitle}>Washington Square Park</Typography>
            </Typography>
            <Typography as={'div'} className={s.locationBox}>
              New York
              <Typography className={s.subTitle}>Washington Square Park</Typography>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}
