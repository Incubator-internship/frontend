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

import s from './homePage.module.scss'

const HomePage: React.FC = () => {
  //TODO: id users which is following

  const { data: posts, error, isLoading } = useGetPostsUserIdQuery(23)

  const updatedAt = posts && posts[0]?.updatedAt

  const calculateTimeAgo = (updatedAt: string): string => {
    const updatedTime = new Date(updatedAt)
    const currentTime = new Date()
    const differenceInMs = currentTime.getTime() - updatedTime.getTime()

    const minutes = Math.floor(differenceInMs / 60000)
    const hours = Math.floor(differenceInMs / 3600000)
    const days = Math.floor(differenceInMs / (3600000 * 24))
    const years = Math.floor(differenceInMs / (3600000 * 24 * 365))

    if (years > 0) {
      return `${years} ${years === 1 ? 'год назад' : 'года назад'}`
    } else if (days > 0) {
      return `${days} ${days === 1 ? 'день назад' : 'дней назад'}`
    } else if (hours > 0) {
      return `${hours} ${hours === 1 ? 'час назад' : 'часов назад'}`
    } else {
      return `${minutes} ${minutes === 1 ? 'минуту назад' : 'минут назад'}`
    }
  }

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
            <Typography variant={'smallText'}>{calculateTimeAgo(updatedAt)}</Typography>
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
            View All Comments (114)
          </Typography>
          <div className={s.postAddComment}>
            <input className={s.postInput} placeholder={'Add a Comment...'} type={'text'} />
            <Typography as={'a'} color={'link'} variant={'h3'}>
              Publish
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
