import React, { useRef, useState } from 'react'

import { useGetUsersQuery } from '@/app/api/inctagramApi'
import { useGetAllPostsQuery } from '@/app/api/posts/postsApi'
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

const PublicPage: React.FC = () => {
  const t = useTranslations<'PublicPage'>('PublicPage')
  const { data: users } = useGetUsersQuery(undefined, {
    pollingInterval: 60000,
  })
  const numberOfUsers: string = users?.length?.toString() || '0'

  const {
    data: posts,
    error,
    isLoading,
  } = useGetAllPostsQuery(undefined, {
    pollingInterval: 60000, // Update each 60sec
  })

  const refs = useRef<Array<ShowMoreRef | null>>([])

  const toggleLines: (index: number) => ShowMoreToggleLinesFn = index => e => {
    refs.current[index]?.toggleLines(e)
  }

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPost, setSelectedPost] = useState<PostsDataByPostId | null>(null)

  const handlePostClick = (post: PostsDataByPostId) => {
    setSelectedPost(post)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedPost(null)
  }

  return (
    <div className={s.wrapper}>
      <div className={s.registeredUsers}>
        <Typography variant={'h2'}>{t('Registered users:')}</Typography>
        <Typography className={s.registeredUserValue} variant={'h2'}>
          {numberOfUsers
            .padStart(numberOfUsers.length + 2, '0')
            .split('')
            .map((number, i) => (
              <span className={s.el} key={number + i}>
                {number}
              </span>
            ))}
        </Typography>
      </div>
      {isLoading && <div>Loading...</div>}
      {error && <div>No posts available...</div>}
      {posts && (
        <div className={s.cards}>
          {posts.map((card, i) => (
            <div className={s.cardItem} key={'cardItem' + i} onClick={() => handlePostClick(card)}>
              <div className={s.cardItemImage} onClick={e => e.stopPropagation()}>
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  slidesPerView={1}
                  spaceBetween={20}
                >
                  {card.photos.map(photo => (
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
              <div className={s.cardItemAvatarTitle}>
                <Avatar>
                  <AvatarImage alt={'Avatar1'} src={avatar1.src} />
                  <AvatarFallback>id{card.userId}</AvatarFallback>
                </Avatar>
                <Typography variant={'h3'}>URLProfile</Typography>
              </div>
              <Typography color={'grey'} variant={'smallText'}>
                {formatDistanceToNow(new Date(card.createdAt), {
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
                        toggleLines(i)(e)
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
                          toggleLines(i)(e)
                        }}
                        variant={'regularLink'}
                      >
                        {t('Show more')}
                      </Typography>
                    </>
                  }
                  ref={el => {
                    refs.current[i] = el
                  }}
                >
                  {card.content}
                </ShowMore>
              </Typography>
            </div>
          ))}
        </div>
      )}
      <PublicPageModal isOpen={isModalOpen} onClose={closeModal} post1={selectedPost} />
    </div>
  )
}

export default PublicPage
