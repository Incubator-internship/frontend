import React, { useRef, useState } from 'react'

import { useGetAllPostsQuery } from '@/app/api/posts/postsApi'
import avatar1 from '@/shared/assets/images/avatars/avatar1.webp'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar/Avatar'
import { Typography } from '@/shared/ui/typography'
import { ShowMore, type ShowMoreRef, type ShowMoreToggleLinesFn } from '@re-dev/react-truncate'
import { formatDistanceToNow } from 'date-fns'
import { enGB, ru } from 'date-fns/locale'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import s from './publicPage.module.scss'

const numberOfUsers: string = '9213'

//TODO: add carousel https://ui.shadcn.com/docs/components/carousel
//TODO: numberOfUsers

const PublicPage: React.FC = () => {
  const t = useTranslations<'PublicPage'>('PublicPage')

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
            <div className={s.cardItem} key={'cardItem' + i}>
              <div className={s.cardItemImage}>
                <Image
                  alt={'Image1'}
                  fill
                  priority
                  sizes={'300px'}
                  src={card.photos[0].url}
                  style={{
                    objectFit: 'cover',
                  }}
                />
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
                      onClick={toggleLines(i)}
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
                        onClick={toggleLines(i)}
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
    </div>
  )
}

export default PublicPage
