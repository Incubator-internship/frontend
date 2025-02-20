'use client'
import React, { useRef, useState } from 'react'

import { PostsDataByPostId } from '@/app/api/posts/postsApi.types'
import avatar1 from '@/shared/assets/images/avatars/avatar1.webp'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar/Avatar'
import { Typography } from '@/shared/ui/typography'
import { PublicPageModal } from '@/views/publicPageModal/ui/PublicPageModal'
import { ShowMore, type ShowMoreRef, type ShowMoreToggleLinesFn } from '@re-dev/react-truncate'
import { formatDistanceToNow } from 'date-fns'
import { enGB, ru } from 'date-fns/locale'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper-bundle.css'
//NOTE: node_modules\swiper\swiper-bundle.css rewriting
import './publicPage.scss'

import s from './publicPage.module.scss'

const Post = ({ post }: { post: PostsDataByPostId }) => {
  const t = useTranslations('PublicPage')
  const showMoreRef = useRef<ShowMoreRef>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleLines: ShowMoreToggleLinesFn = e => {
    showMoreRef.current?.toggleLines(e)
  }

  const handlePostClick = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className={s.postItem} onClick={handlePostClick}>
      <div onClick={e => e.stopPropagation()}>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          slidesPerView={1}
          spaceBetween={20}
        >
          {post.photos.map(photo => (
            <SwiperSlide key={photo.id}>
              <Image
                alt={`Photo ${photo.id}`}
                height={240}
                priority
                src={photo.url}
                style={{ objectFit: 'cover' }}
                width={234}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={s.postItemAvatarTitle}>
        <Avatar>
          <AvatarImage alt={'Avatar1'} src={avatar1.src} />
          <AvatarFallback>id{post.userId}</AvatarFallback>
        </Avatar>
        <Typography variant={'h3'}>URLProfile</Typography>
      </div>

      <Typography color={'grey'} variant={'smallText'}>
        {formatDistanceToNow(new Date(post.createdAt), {
          addSuffix: true,
          locale: t('locale') === 'ru' ? ru : enGB,
        })}
      </Typography>

      <Typography as={'span'} className={s.cardItemText} variant={'regularText14'}>
        <ShowMore
          less={
            <Typography
              as={'span'}
              className={s.showMoreLess}
              color={'link'}
              onClick={e => {
                e.stopPropagation()
                toggleLines(e)
              }}
              variant={'regularLink'}
            >
              {t('Show less')}
            </Typography>
          }
          lines={3}
          more={
            <>
              <span className={s.showMoreSpan}>...</span>
              <Typography
                as={'span'}
                className={s.showMoreLess}
                color={'link'}
                onClick={e => {
                  e.stopPropagation()
                  toggleLines(e)
                }}
                variant={'regularLink'}
              >
                {t('Show more')}
              </Typography>
            </>
          }
          ref={showMoreRef}
        >
          {post.content}
        </ShowMore>
      </Typography>

      <PublicPageModal isOpen={isModalOpen} onClose={closeModal} post1={post} />
    </div>
  )
}

export default Post
