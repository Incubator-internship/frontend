import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Photos } from '@/app/api/posts/postsApi.types'
import image1 from '@/shared/assets/images/publicImages/image1.webp'
import image2 from '@/shared/assets/images/publicImages/image2.webp'
import image3 from '@/shared/assets/images/publicImages/image3.webp'
import image4 from '@/shared/assets/images/publicImages/image4.webp'

import { Carousel } from './Carousel'

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Carousel',
}

export default meta

type Story = StoryObj<typeof Carousel>

export const DefaultWithPhotos: Story = {
  render: () => {
    const photos: Photos[] = [
      { id: 1, postId: 1, url: image1.src },
      { id: 2, postId: 1, url: image2.src },
      { id: 3, postId: 1, url: image3.src },
      { id: 4, postId: 1, url: image4.src },
    ]

    return <Carousel photos={photos} />
  },
}

export const DefaultWithArrayStrings: Story = {
  render: () => {
    const photos: string[] = [image1.src, image2.src, image3.src, image4.src]

    return <Carousel photos={photos} />
  },
}

export const SingleImageWithArrayPhotos: Story = {
  render: () => {
    const singlePhoto: Photos[] = [{ id: 1, postId: 1, url: image1.src }]

    return <Carousel photos={singlePhoto} />
  },
}

export const SingleImageWithStrings: Story = {
  render: () => {
    const singlePhoto: string[] = [image1.src]

    return <Carousel photos={singlePhoto} />
  },
}
