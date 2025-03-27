import { useState } from 'react'

import { FileWithPreview } from '@/features/addPost/ui/createPost/CreatePost'
import { Carousel } from '@/shared/ui/carousel'
import clsx from 'clsx'
import Image from 'next/image'

import s from './filtersPhotoStep.module.scss'

import { useFilters } from '../../hooks/useFilter'

type Props = {
  images?: FileWithPreview[]
}

export const FiltersPhotoStep = ({ images }: Props) => {
  const [selectedFilter, setSelectedFilter] = useState('none')
  const { applyFilter, filters, filtersForImages } = useFilters()
  const [currentSlide, setCurrentSlide] = useState(0)
  // const [filtersForImages, setFiltersForImages] = useState<Record<number, string>>({})

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
