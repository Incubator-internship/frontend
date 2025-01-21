'use client'

import ArrowLeft from '@/shared/assets/icons/ArrowLeft'
import ArrowRight from '@/shared/assets/icons/ArrowRight'
import clsx from 'clsx'
import Image from 'next/image'

import s from './carousel.module.scss'

import { PostType } from '../../../views/publicPageModal/DataArray'

type Carousel2Props = {
  currentImageIndex: number
  nextImage: () => void
  post: PostType
  prevImage: () => void
  setCurrentIndex: (index: number) => void
}

export const Carousel2 = ({
  currentImageIndex,
  nextImage,
  post,
  prevImage,
  setCurrentIndex,
}: Carousel2Props) => {
  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className={s.carousel}>
      <Image
        alt={'Image1'}
        fill
        priority
        sizes={'600px'}
        src={post.imagePost[currentImageIndex].imgPost}
        style={{ objectFit: 'cover' }}
      />
      {post.imagePost.length > 1 && (
        <>
          <button className={s.nextButton} onClick={nextImage} type={'button'}>
            <ArrowRight className={s.icon} />
          </button>
          <button className={s.prevButton} onClick={prevImage} type={'button'}>
            <ArrowLeft className={s.icon} />
          </button>
        </>
      )}
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
