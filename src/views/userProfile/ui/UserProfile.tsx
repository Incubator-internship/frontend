import React from 'react'

import { UserProfileResponse } from '@/app/api/users/usersApi.types'
import AvatarImg from '@/shared/assets/images/userProfile/profileAvatar.webp'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar'
import { Button } from '@/shared/ui/button'
import { Typography } from '@/shared/ui/typography'
import { checkAuth } from '@/shared/utils/checkAuth'
import { getPostsByUserId } from '@/shared/utils/getPostsByUserId'
import Post from '@/views/publicPage/ui/Post'
import clsx from 'clsx'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

import s from './userProfile.module.scss'

export default async function UserProfile({
  params,
}: {
  params: { userId: string; nickname: string; originalAvatarUrl: string; aboutMe: string }
}) {
  const { isAuth, userId: authUserId } = await checkAuth()
  const t = await getTranslations('UserProfile')

  const userId = params?.userId
  const aboutMe = params.aboutMe
  const nickname = params.nickname
  const avatar = params.originalAvatarUrl

  const { posts } = await getPostsByUserId(`${userId}`)

  return (
    <div className={s.userPage}>
      <section className={s.userProfile}>
        <div className={s.info}>
          <Avatar className={s.ava}>
            <AvatarImage alt={'Profile avatar'} src={avatar} />
            <AvatarFallback>👹</AvatarFallback>
          </Avatar>
          <div className={s.bio}>
            <h2 className={s.username}>
              {nickname}
              {Number(params?.userId) === authUserId && (
                <Button as={Link} href={'/profile-settings'} variant={'secondary'}>
                  {t('Profile Settings')}
                </Button>
              )}
            </h2>
            <div className={s.stats}>
              <div>
                <span>2218</span>
                <Typography as={'a'} href={'#'}>
                  {t('Following')}
                </Typography>
              </div>
              <div>
                <span>2358</span>
                <Typography as={'a'} href={'#'}>
                  {t('Followers')}
                </Typography>
              </div>
              <div>
                <span>2764</span>
                <Typography as={'a'} href={'#'}>
                  {t('Publications')}
                </Typography>
              </div>
            </div>
            <Typography as={'p'} className={clsx(s.description)} variant={'body1'}>
              {aboutMe}
            </Typography>
          </div>
        </div>
        <div className={s.gallery}>
          {posts && posts.map(post => <Post key={post.id} post={post} />)}
        </div>
      </section>
    </div>
  )
}
