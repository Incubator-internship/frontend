import { useState } from 'react'

import Arrow from '@/shared/assets/icons/Arrow'
import ArrowLeft from '@/shared/assets/icons/ArrowLeft'
import ArrowRight from '@/shared/assets/icons/ArrowRight'

import s from './modalSlider.module.scss'

const images = [
  'https://via.placeholder.com/800x400?text=Image+1',
  'https://via.placeholder.com/800x400?text=Image+2',
  'https://via.placeholder.com/800x400?text=Image+3',
  'https://via.placeholder.com/800x400?text=Image+4',
]

export const ModalSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className={s.modalSlider}>
      <button className={s.prevButton} onClick={prevSlide} type={'submit'}>
        <ArrowLeft className={s.icon} />
      </button>
      <img alt={`Slide ${currentIndex + 1}`} className={s.image} src={images[currentIndex]} />
      <button className={s.nextButton} onClick={nextSlide} type={'submit'}>
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
