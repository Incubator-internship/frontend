import { useState } from 'react'

import Arrow from '@/shared/assets/icons/Arrow'
import ArrowLeft from '@/shared/assets/icons/ArrowLeft'
import ArrowRight from '@/shared/assets/icons/ArrowRight'

import s from './modalSlider.module.scss'

type ModalSliderProps = {
  images: string[]
  nextPost: () => void
  prevPost: () => void
}

export const ModalSlider = ({ images, nextPost, prevPost }: ModalSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className={s.modalSlider}>
      <button className={s.prevButton} onClick={prevPost} type={'submit'}>
        <ArrowLeft className={s.icon} />
      </button>
      <img alt={`Slide ${currentIndex + 1}`} className={s.image} src={images[currentIndex]} />
      <button className={s.nextButton} onClick={nextPost} type={'submit'}>
        <ArrowRight className={s.icon} />
      </button>
      <ul className={s.dots}>
        {images.map((_, index) => (
          <li
            className={`${s.dot} ${currentIndex === index ? s.active : ''}`}
            key={index}
            onClick={() => goToSlide(index)}
          />
        ))}
      </ul>
    </div>
  )
}
