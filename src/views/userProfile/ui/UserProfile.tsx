import React from 'react'

import AvatarImg from '@/shared/assets/images/userProfile/profileAvatar.webp'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar'
import { Button } from '@/shared/ui/button'
import { Typography } from '@/shared/ui/typography'
import { checkAuth } from '@/shared/utils/checkAuth'
import { getPostsByUserId } from '@/shared/utils/getPostsByUserId'
import Post from '@/views/publicPage/ui/Post'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import s from './userProfile.module.scss'

export default async function UserProfile({ params }: { params: { userId: string } }) {
  const { isAuth, userId: authUserId } = await checkAuth()

  // const userId = isAuth ? authUserId : params?.userId
  const userId = params?.userId

  const { posts } = await getPostsByUserId(`${userId}`)

  // const galleryImages = posts.flatMap(post =>
  //   post.photos.map((photo: { url: string }) => photo.url)
  // )

  return (
    <div className={s.userPage}>
      <section className={s.userProfile}>
        <div className={s.info}>
          <Avatar className={s.ava}>
            <AvatarImage alt={'Profile avatar'} src={AvatarImg.src} />
            <AvatarFallback>👹</AvatarFallback>
          </Avatar>
          <div className={s.bio}>
            <h2 className={s.username}>
              URLProfile{userId} - Auth:{isAuth ? 'true' : 'false'}
              {Number(params?.userId) === authUserId && (
                <Button as={Link} href={'/profile-settings'} variant={'secondary'}>
                  Profile Settings
                </Button>
              )}
            </h2>
            <div className={s.stats}>
              <div>
                <span>2218</span>
                <Typography as={'a'} href={'#'}>
                  Following
                </Typography>
              </div>
              <div>
                <span>2358</span>
                <Typography as={'a'} href={'#'}>
                  Followers
                </Typography>
              </div>
              <div>
                <span>2764</span>
                <Typography as={'a'} href={'#'}>
                  Publications
                </Typography>
              </div>
            </div>
            <Typography as={'p'} className={clsx(s.description)} variant={'body1'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco
              <Typography as={'a'} variant={'link1'}>
                laboris nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </Typography>
          </div>
        </div>
        <div className={s.gallery}>
          {/* {posts &&
            galleryImages.map((image, index) => (
              <div className={s.cardItemImage} key={index}>
                <Image
                  alt={`Gallery image ${index + 1}`}
                  fill
                  sizes={'234px'}
                  src={image}
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </div>
            ))} */}
          {posts && posts.map(post => <Post key={post.id} post={post} />)}
        </div>
      </section>
    </div>
  )
}
