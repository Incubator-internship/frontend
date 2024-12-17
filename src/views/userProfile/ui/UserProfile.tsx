import React from 'react'

import image1 from '@/shared/assets/images/userProfile/photo1.webp'
import image2 from '@/shared/assets/images/userProfile/photo2.webp'
import image3 from '@/shared/assets/images/userProfile/photo3.webp'
import image4 from '@/shared/assets/images/userProfile/photo4.webp'
import image5 from '@/shared/assets/images/userProfile/photo5.webp'
import image6 from '@/shared/assets/images/userProfile/photo6.webp'
import image7 from '@/shared/assets/images/userProfile/photo7.webp'
import Avatar from '@/shared/assets/images/userProfile/profileAvatar.webp'
import { Typography } from '@/shared/ui/typography'
import clsx from 'clsx'
import Image from 'next/image'

import s from './userProfile.module.scss'

const galleryImages = [
  image1.src,
  image2.src,
  image3.src,
  image4.src,
  image5.src,
  image6.src,
  image7.src,
]

export default function UserProfile() {
  return (
    <section className={s.userProfile}>
      <div className={s.info}>
        <Image alt={'Profile avatar'} className={s.ava} height={204} src={Avatar.src} width={204} />
        <div className={s.bio}>
          <h2 className={s.username}>URLProfile</h2>
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
        {galleryImages.map((image, index) => (
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
        ))}
      </div>
    </section>
  )
}
