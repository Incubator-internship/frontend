import { useState } from 'react'

import { Photos } from '@/app/api/posts/postsApi.types'
import ArrowLeft from '@/shared/assets/icons/ArrowLeft'
import ArrowRight from '@/shared/assets/icons/ArrowRight'
import clsx from 'clsx'

import s from './carousel.module.scss'

// export type Images = {
//   photo: string
// }
type CarouselProps = {
  photos: Photos[] | string[]
}

export const Carousel = ({ photos }: CarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index)
  }

  const nextImage = () => {
    const photosLength = photos?.length

    if (currentImageIndex < photosLength - 1) {
      setCurrentImageIndex(prevIndex => prevIndex + 1)
    }
  }

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(prevIndex => prevIndex - 1)
    }
  }

  const isImagesType = (photos: Photos[] | string[]): photos is string[] => {
    return typeof photos[0] === 'string'
  }

  const currentImageUrl = isImagesType(photos)
    ? photos[currentImageIndex]
    : photos[currentImageIndex].url

  return (
    <div className={s.carousel}>
      <button className={s.prevButton} onClick={prevImage} type={'button'}>
        <ArrowLeft className={s.icon} />
      </button>
      <img alt={'img'} className={s.image} src={currentImageUrl} />
      <button className={s.nextButton} onClick={nextImage} type={'button'}>
        <ArrowRight className={s.icon} />
      </button>
      <ul className={s.dots}>
        {photos.map((_, index) => {
          return (
            <li
              className={clsx(s.dot, currentImageIndex === index && s.active)}
              key={index}
              onClick={() => goToSlide(index)}
            />
          )
        })}
      </ul>
    </div>
  )
}
