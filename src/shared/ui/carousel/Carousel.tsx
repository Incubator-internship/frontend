'use client'

import ArrowLeft from '@/shared/assets/icons/ArrowLeft'
import ArrowRight from '@/shared/assets/icons/ArrowRight'
import clsx from 'clsx'
import Image from 'next/image'

import s from './carousel.module.scss'

import { PostType } from '../../../views/publicPageModal/DataArray'

type CarouselProps = {
  currentImageIndex: number
  nextImage: () => void
  post: PostType
  prevImage: () => void
  setCurrentIndex: (index: number) => void
}

export const Carousel = ({
  currentImageIndex,
  nextImage,
  post,
  prevImage,
  setCurrentIndex,
}: CarouselProps) => {
  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className={s.carousel}>
      <button className={s.prevButton} onClick={prevImage} type={'button'}>
        <ArrowLeft className={s.icon} />
      </button>
      {/* <img alt={'img'} className={s.image} src={post.imagePost[currentImageIndex].imgPost} /> */}
      <Image
        alt={'Image1'}
        fill
        priority
        sizes={'600px'}
        src={post.imagePost[currentImageIndex].imgPost}
        style={{ objectFit: 'cover' }}
      />
      <button className={s.nextButton} onClick={nextImage} type={'button'}>
        <ArrowRight className={s.icon} />
      </button>
      <ul className={s.dots}>
        {post.imagePost.map((_, index) => (
          <li
            className={clsx(s.dot, currentImageIndex === index && s.active)}
            key={index}
            onClick={() => goToSlide(index)}
          />
        ))}
      </ul>
    </div>
  )
}
