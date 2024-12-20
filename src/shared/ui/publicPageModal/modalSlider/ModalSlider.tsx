import ArrowLeft from '@/shared/assets/icons/ArrowLeft'
import ArrowRight from '@/shared/assets/icons/ArrowRight'
import clsx from 'clsx'

import s from './modalSlider.module.scss'

import { PostType } from '../DataArray'

type ModalSliderProps = {
  currentImageIndex: number
  nextImage: () => void
  post: PostType
  prevImage: () => void
  setCurrentIndex: (index: number) => void
}

export const ModalSlider = ({
  currentImageIndex,
  nextImage,
  post,
  prevImage,
  setCurrentIndex,
}: ModalSliderProps) => {
  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className={s.modalSlider}>
      <button className={s.prevButton} onClick={prevImage} type={'button'}>
        <ArrowLeft className={s.icon} />
      </button>
      <img alt={'img'} className={s.image} src={post.imagePost[currentImageIndex].imgPost} />
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
