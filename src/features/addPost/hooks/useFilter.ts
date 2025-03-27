import { useState } from 'react'

const filters = [
  { filter: 'none', name: 'Normal' },
  { filter: 'brightness(104%) contrast(104%) saturate(122%)', name: 'Icy Water' },
  { filter: 'brightness(103%) contrast(114%) saturate(122%)', name: 'Fever' },
  {
    filter: 'grayscale(50%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(140%) sepia(0%)',
    name: 'Juno',
  },
  { filter: 'brightness(105%) grayscale(100%) sepia(50%)', name: 'Vintage May' },
  { filter: 'contrast(120%) grayscale(100%)', name: 'Red Sky' },
  { filter: 'grayscale(100%)', name: 'Ludwig' },
  {
    filter:
      'brightness(110%) contrast(116%) grayscale(0%) hue-rotate(342deg) invert(0%) opacity(100%) saturate(84%) sepia(0%)',
    name: 'Simple Gray',
  },
  {
    filter:
      'contrast(107%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(165%) sepia(50%)',
    name: 'Baby Glass',
  },
]

export const useFilters = () => {
  const [filtersForImages, setFiltersForImages] = useState<Record<number, string>>({})

  const applyFilter = (imageIndex: number, filter: string) => {
    setFiltersForImages(prev => ({ ...prev, [imageIndex]: filter }))
  }

  return {
    applyFilter,
    filters,
    filtersForImages,
  }
}
