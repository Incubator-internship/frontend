import { useState } from 'react'

import ArrowLeft from '@/shared/assets/icons/ArrowLeft'
import ArrowRight from '@/shared/assets/icons/ArrowRight'

import s from './modalSlider.module.scss'

import { PostType } from '../DataArray'

type ModalSliderProps = {
  currentIndex: number
  nextPost: () => void
  posts: PostType[]
  prevPost: () => void
  setCurrentIndex: (index: number) => void
}

export const ModalSlider = ({
  currentIndex,
  nextPost,
  posts,
  prevPost,
  setCurrentIndex,
}: ModalSliderProps) => {
  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className={s.modalSlider}>
      <button className={s.prevButton} onClick={prevPost} type={'button'}>
        <ArrowLeft className={s.icon} />
      </button>
      <img
        alt={`Slide ${currentIndex + 1}`}
        className={s.image}
        src={posts[currentIndex].imagePost}
      />
      <button className={s.nextButton} onClick={nextPost} type={'button'}>
        <ArrowRight className={s.icon} />
      </button>
      <ul className={s.dots}>
        {posts.map((_, index) => (
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
