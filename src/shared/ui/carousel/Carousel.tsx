import { useState } from 'react'

import { Photos } from '@/app/api/posts/postsApi.types'
import ArrowLeft from '@/shared/assets/icons/ArrowLeft'
import ArrowRight from '@/shared/assets/icons/ArrowRight'
import clsx from 'clsx'

import s from './carousel.module.scss'

type CarouselProps = {
  className?: string
  imageStyle?: React.CSSProperties
  onSlideChange?: (index: number) => void
  photos: Photos[] | string[]
}

export const Carousel = ({ className, imageStyle, onSlideChange, photos }: CarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const photosLength = photos.length
  const index = photosLength > 0 ? Math.min(currentImageIndex, photosLength - 1) : 0
  const goToSlide = (index: number) => {
    setCurrentImageIndex(index)
  }

  const nextImage = () => {
    if (index < photosLength - 1) {
      const newIndex = currentImageIndex + 1

      setCurrentImageIndex(newIndex)
      onSlideChange && onSlideChange(newIndex)
    }
  }

  const prevImage = () => {
    if (index > 0) {
      const newIndex = currentImageIndex - 1

      setCurrentImageIndex(newIndex)
      onSlideChange && onSlideChange(newIndex)
    }
  }

  const isImagesType = (photos: Photos[] | string[]): photos is string[] => {
    return typeof photos[0] === 'string'
  }

  const currentImageUrl = isImagesType(photos) ? photos[index] : photos[index]?.url

  return (
    <div className={clsx(s.carousel, className)}>
      <button
        className={photosLength > 1 ? s.prevButton : s.hidden}
        onClick={prevImage}
        type={'button'}
      >
        <ArrowLeft className={s.icon} />
      </button>
      <img alt={'img'} className={s.image} src={currentImageUrl} style={imageStyle} />
      <button
        className={photosLength > 1 ? s.nextButton : s.hidden}
        onClick={nextImage}
        type={'button'}
      >
        <ArrowRight className={s.icon} />
      </button>
      <ul className={photosLength > 1 ? s.dots : s.hidden}>
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
