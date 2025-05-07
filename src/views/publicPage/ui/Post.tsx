'use client'

import { useEffect, useRef, useState } from 'react'

import { useGetMeQuery } from '@/app/api/auth/authApi'
import { PostsDataByPostId } from '@/app/api/posts/postsApi.types'
import { useGetProfileQuery } from '@/app/api/users/usersApi'
import avatar1 from '@/shared/assets/images/avatars/avatar1.webp'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar/Avatar'
import { Typography } from '@/shared/ui/typography'
import { PublicPageModal } from '@/views/publicPageModal/ui/PublicPageModal'
import { ShowMore, type ShowMoreRef } from '@re-dev/react-truncate'
import { skipToken } from '@reduxjs/toolkit/query'
import { formatDistanceToNow } from 'date-fns'
import { enGB, ru } from 'date-fns/locale'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

//NOTE: node_modules\swiper\swiper-bundle.css rewriting
import './publicPage.scss'
import 'swiper/swiper-bundle.css'

import s from './publicPage.module.scss'

const Post = ({ post }: { post: PostsDataByPostId }) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const t = useTranslations('PublicPage')
  const showMoreRef = useRef<ShowMoreRef>(null)
  const postIdFromUrl = searchParams.get('postId')
  const postIdNumber = postIdFromUrl ? Number(postIdFromUrl) : null
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPostId, setSelectedPostId] = useState<null | number>(null)
  const { data: meData } = useGetMeQuery()
  const { data: dataUser } = useGetProfileQuery(meData?.userId ?? skipToken)
  const nickName = meData?.login
  const avatarSmall = dataUser?.smallAvatarUrl

  useEffect(() => {
    if (postIdNumber !== null) {
      setIsModalOpen(true)
      setSelectedPostId(postIdNumber)
    } else if (postIdNumber === null) {
      setIsModalOpen(false)
    }
  }, [postIdNumber])

  const handlePostClick = (postId: number) => {
    setIsModalOpen(true)
    setSelectedPostId(postId)
    router.push(`?postId=${postId}`)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedPostId(null)
    router.push('/')
  }

  return (
    <div className={s.postItem} onClick={() => handlePostClick(post.id)}>
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
                onClick={e => {
                  e.stopPropagation()
                  handlePostClick(post.id)
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={s.postItemAvatarTitle}>
        <Avatar>
          <AvatarImage alt={'Avatar1'} src={avatarSmall} />
          <AvatarFallback>👹</AvatarFallback>
        </Avatar>
        <Typography variant={'h3'}>{nickName}</Typography>
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
                showMoreRef.current?.toggleLines(e)
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
                  showMoreRef.current?.toggleLines(e)
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

      {isModalOpen && (
        <PublicPageModal isOpen={isModalOpen} onClose={closeModal} postId={selectedPostId} />
      )}
    </div>
  )
}

export default Post
