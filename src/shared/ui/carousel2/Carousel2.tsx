'use client'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'


export const Carousel2 = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => console.log(swiper)}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      slidesPerView={3}
      spaceBetween={50}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  )
}
