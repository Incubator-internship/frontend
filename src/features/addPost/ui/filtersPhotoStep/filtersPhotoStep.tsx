import { useState } from 'react'

import { FileWithPreview } from '@/features/addPost/ui/createPost/CreatePost'
import { Carousel } from '@/shared/ui/carousel'
import clsx from 'clsx'
import Image from 'next/image'

import s from './filtersPhotoStep.module.scss'

type FiltersHook = {
  applyFilter: (imageIndex: number, filter: string) => void
  filters: { filter: string; name: string }[]
  filtersForImages: Record<number, string>
}

type Props = {
  filtersHook: FiltersHook
  images?: FileWithPreview[]
}

export const FiltersPhotoStep = ({ filtersHook, images }: Props) => {
  const { applyFilter, filters, filtersForImages } = filtersHook
  const [currentSlide, setCurrentSlide] = useState(0)

  const photos = images?.map(file => file.preview) || []
  const currentFilter = filtersForImages[currentSlide] || 'none'

  return (
    <div className={s.wrapper}>
      <Carousel
        imageStyle={{ filter: currentFilter }}
        onSlideChange={index => setCurrentSlide(index)}
        photos={photos}
      />
      <div className={s.filters}>
        {filters.map(item => (
          <button
            className={clsx(s.filterButton, {
              [s.active]: currentFilter === item.filter,
            })}
            key={item.name}
            onClick={() => applyFilter(currentSlide, item.filter)}
            type={'button'}
          >
            <Image
              alt={'preview'}
              className={s.filterThumbnail}
              height={100}
              src={photos[currentSlide]}
              style={{ filter: item.filter }}
              width={100}
            />
            <div className={s.filterName}>{item.name}</div>
          </button>
        ))}
      </div>
    </div>
  )
}
