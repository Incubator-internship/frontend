import { useState } from 'react'

const filters = [
  { filter: 'none', name: 'Normal' },
  { filter: 'brightness(104%) contrast(104%) saturate(122%)', name: 'Icy Water' },
  { filter: 'brightness(103%) contrast(114%) saturate(122%)', name: 'Fever' },
  {
    filter: 'brightness(110%) contrast(140%) sepia(60%) saturate(80%)',
    name: 'Retro',
  },
  { filter: 'brightness(105%) grayscale(100%) sepia(50%)', name: 'Vintage May' },
  { filter: 'brightness(105%) contrast(90%) saturate(150%) hue-rotate(100deg)', name: 'Red Sky' },
  { filter: 'grayscale(100%)', name: 'Ludwig' },
  {
    filter: 'brightness(95%) contrast(120%) saturate(130%) hue-rotate(200deg)',
    name: 'Simple blue',
  },
  {
    filter: 'brightness(95%) contrast(110%) sepia(70%) saturate(150%) hue-rotate(10deg)',
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
