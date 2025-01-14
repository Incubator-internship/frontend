import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import image1 from '@/shared/assets/images/publicImages/image1.webp'
import image2 from '@/shared/assets/images/publicImages/image2.webp'
import image3 from '@/shared/assets/images/publicImages/image3.webp'
import image4 from '@/shared/assets/images/publicImages/image4.webp'
import photo3 from '@/shared/assets/images/userProfile/photo3.webp'

import { PostType } from '../../../views/publicPageModal/DataArray'
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

const Post: PostType = {
  comments: [],
  dataPost: {
    imgProfile: photo3.src,
    urlProfile: 'Profile 1',
  },
  datePost: '2024-12-23',
  id: '1',
  imagePost: [
    { imgPost: image1.src },
    { imgPost: image2.src },
    { imgPost: image3.src },
    { imgPost: image4.src },
  ],
  likesPost: [],
}

export const Default: Story = {
  render: () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextImage = () => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % Post.imagePost.length)
    }

    const prevImage = () => {
      setCurrentIndex(prevIndex => (prevIndex - 1 + Post.imagePost.length) % Post.imagePost.length)
    }

    return (
      <Carousel
        currentImageIndex={currentIndex}
        nextImage={nextImage}
        post={Post}
        prevImage={prevImage}
        setCurrentIndex={setCurrentIndex}
      />
    )
  },
}
export const SingleImage: Story = {
  render: () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextImage = () => {
      setCurrentIndex(prev => (prev + 1) % Post.imagePost.length)
    }

    const prevImage = () => {
      setCurrentIndex(prev => (prev - 1 + Post.imagePost.length) % Post.imagePost.length)
    }

    const singleImagePost = {
      ...Post,
      imagePost: [{ imgPost: image1.src }],
    }

    return (
      <Carousel
        currentImageIndex={currentIndex}
        nextImage={nextImage}
        post={singleImagePost}
        prevImage={prevImage}
        setCurrentIndex={setCurrentIndex}
      />
    )
  },
}
