'use client'

import React from 'react'

import { useGetPostsUserIdQuery } from '@/app/api/posts/postsApi'
import {
  BookmarkOutlineIcon,
  HeartOutlineIcon,
  MessageCircleOutlineIcon,
  PaperPlaneOutlineIcon,
} from '@/shared/assets/icons'
import avatar1 from '@/shared/assets/images/avatars/avatar1.webp'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar/Avatar'
import { Sidebar } from '@/shared/ui/sidebar'
import { Typography } from '@/shared/ui/typography'
import { formatDistanceToNow } from 'date-fns'
import { enGB, ru } from 'date-fns/locale'
import { useTranslations } from 'next-intl'

import s from './homePage.module.scss'

const HomePage: React.FC = () => {
  //TODO: id users which is following

  const t = useTranslations<'HomePage'>('HomePage')

  const { data: posts, error, isLoading } = useGetPostsUserIdQuery(7)

  const updatedAt = posts && posts[0]?.updatedAt

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div className={s.postWrapper}>
        <div className={s.postAvatarTitle}>
          <Avatar>
            <AvatarImage alt={'Avatar1'} src={avatar1.src} />
            <AvatarFallback>AF</AvatarFallback>
          </Avatar>

          <Typography variant={'h3'}>URLProfiele &middot;</Typography>
          {updatedAt && (
            <Typography color={'grey'} variant={'smallText'}>
              {formatDistanceToNow(new Date(updatedAt), {
                addSuffix: true,
                locale: t('locale') === 'ru' ? ru : enGB,
              })}
            </Typography>
          )}
          <Typography className={s.lastChild} variant={'h2'}>
            &middot;&middot;&middot;
          </Typography>
        </div>

        {posts && <img alt={'Image1'} className={s.postImage} src={posts[0].photos[0].url} />}

        <div className={s.postFooter}>
          <div className={s.postIcons}>
            <HeartOutlineIcon />
            <MessageCircleOutlineIcon />
            <PaperPlaneOutlineIcon />
            <BookmarkOutlineIcon className={s.lastChild} />
          </div>
          <div className={s.postContent}>
            <Avatar>
              <AvatarImage alt={'Avatar1'} src={avatar1.src} />
              <AvatarFallback>AF</AvatarFallback>
            </Avatar>
            <Typography variant={'boldText14'}>URLProfile {posts && posts[0]?.content}</Typography>
          </div>
          <div className={s.postLikes}>
            {[1, 2, 3].map(item => (
              <Avatar className={s.smallAvatar} key={item}>
                <AvatarImage alt={`Avatar ${item}`} src={avatar1.src} />
                <AvatarFallback>AF</AvatarFallback>
              </Avatar>
            ))}
            <Typography variant={'smallText'}>2 243 &quot;Like&quot;</Typography>
          </div>
          <Typography className={s.postComments} color={'grey'} variant={'boldText14'}>
            {t('View All Comments')} (114)
          </Typography>
          <div className={s.postAddComment}>
            <input className={s.postInput} placeholder={t('Add a Comment')} type={'text'} />
            <Typography as={'a'} color={'link'} variant={'h3'}>
              {t('Publish')}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
