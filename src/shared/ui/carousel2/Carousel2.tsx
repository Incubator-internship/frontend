'use client'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper-bundle.css'

import s from './carousel2.module.scss'

export type Images = {
  photo: string
}
type CarouselProps2 = {
  photos: string[]
}
export const Carousel2 = ({ photos }: CarouselProps2) => {
  return (
    <Swiper
      className={s.carousel}
      modules={[Navigation, Pagination, A11y]}
      navigation
      pagination={{ clickable: true, dynamicBullets: true, dynamicMainBullets: 5 }}
      slidesPerView={1}
    >
      {photos.map((el, index) => {
        return (
          <SwiperSlide key={index}>
            <img alt={`Slide ${index}`} src={el} style={{ height: '100%', width: '100%' }} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
