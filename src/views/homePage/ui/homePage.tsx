'use client'

import React, { useState } from 'react'

import { useGetAllPostsQuery } from '@/app/api/posts/postsApi'
import avatar1 from '@/shared/assets/images/avatars/avatar1.webp'
import image1 from '@/shared/assets/images/publicImages/image1.webp'
import image2 from '@/shared/assets/images/publicImages/image2.webp'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar/Avatar'
import { Carousel } from '@/shared/ui/carousel'
import { ModalComments } from '@/shared/ui/modalComments'
import { Sidebar } from '@/shared/ui/sidebar'
import { Typography } from '@/shared/ui/typography'
import Image from 'next/image'

import s from './homePage.module.scss'

const post: any = {
  comments: [],
  dataPost: {
    imgProfile: avatar1.src,
    urlProfile: 'Profile 1',
  },
  datePost: '2024-12-23',
  id: '1',
  imagePost: [
    { imgPost: image1.src },
    { imgPost: image2.src },
    { imgPost: image1.src },
    { imgPost: image1.src },
  ],
  likesPost: [],
}

const post2: any = {
  content: 'First test post test',
  createdAt: '2025-01-03T12:04:36.389Z',
  id: 3,
  photos: [
    {
      id: 3,
      postId: 3,
      url: 'https://excubatoir-bucket.s3.eu-north-1.amazonaws.com/compressed-1735905873727-_74aa711f-8621-4d4d-8f9e-819323bf08a2.jpg',
    },
    {
      id: 4,
      postId: 3,
      url: 'https://excubatoir-bucket.s3.eu-north-1.amazonaws.com/compressed-1735905874319-_1667f27c-64f7-4ef1-8295-d81f91adaf51.jpg',
    },
    {
      id: 5,
      postId: 3,
      url: 'https://excubatoir-bucket.s3.eu-north-1.amazonaws.com/compressed-1735905874938-doroga_asfalt_razmetka_130996_3840x2400.jpg',
    },
    {
      id: 6,
      postId: 3,
      url: 'https://excubatoir-bucket.s3.eu-north-1.amazonaws.com/compressed-1735905875588-doroga_derevia_tonnel_147629_3840x2400.jpg',
    },
    {
      id: 7,
      postId: 3,
      url: 'https://excubatoir-bucket.s3.eu-north-1.amazonaws.com/compressed-1735905876077-IT-style%20logo%20for%20Excubator.png',
    },
  ],
  userId: 23,
}

const HomePage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { data: posts } = useGetAllPostsQuery()

  console.log(posts)

  const nextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % post.imagePost.length)
  }

  const prevImage = () => {
    setCurrentImageIndex(
      prevIndex => (prevIndex - 1 + post.imagePost.length) % post.imagePost.length
    )
  }

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div className={s.postWrapper}>
        <div className={s.postAvatarTitle}>
          <Avatar>
            <AvatarImage alt={'Avatar1'} src={avatar1.src} />
            <AvatarFallback>A1</AvatarFallback>
          </Avatar>
          <Typography variant={'h3'}>URLProfile</Typography>
        </div>
        <Carousel
          currentImageIndex={currentImageIndex}
          nextImage={nextImage}
          post={post}
          prevImage={prevImage}
          setCurrentIndex={setCurrentImageIndex}
        />
        {/* <ModalComments post={post} /> */}
        <div>{posts && posts[0]?.content}</div>
      </div>
    </div>
  )
}

export default HomePage
