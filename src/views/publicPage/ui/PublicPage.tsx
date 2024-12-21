'use client'

import React, { useRef } from 'react'

import avatar1 from '@/shared/assets/images/avatars/avatar1.webp'
import avatar2 from '@/shared/assets/images/avatars/avatar2.webp'
import avatar3 from '@/shared/assets/images/avatars/avatar3.webp'
import avatar4 from '@/shared/assets/images/avatars/avatar4.webp'
import image1 from '@/shared/assets/images/publicImages/image1.webp'
import image2 from '@/shared/assets/images/publicImages/image2.webp'
import image3 from '@/shared/assets/images/publicImages/image3.webp'
import image4 from '@/shared/assets/images/publicImages/image4.webp'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar/Avatar'
import { Typography } from '@/shared/ui/typography'
import { ShowMore, type ShowMoreRef, type ShowMoreToggleLinesFn } from '@re-dev/react-truncate'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import s from './publicPage.module.scss'

const cardItemText: string =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui necessitatibus exercitationem officia optio voluptates consequuntur possimus ex, ut adipisci alias maxime temporibus totam accusantium. Pariatur, magni numquam! Quibusdam, a tempore.'

const numberOfUsers: string = '9213'
const cardsData = [
  { avatar: avatar1, image: image1, text: cardItemText },
  { avatar: avatar2, image: image2, text: cardItemText },
  {
    avatar: avatar3,
    image: image3,
    text: 'Long text Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui necessitatibus exercitationem officia optio voluptates consequuntur possimus ex, ut adipisci alias maxime temporibus totam accusantium. Pariatur, magni numquam! Quibusdam, a tempore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui necessitatibus exercitationem officia optio voluptates consequuntur possimus ex, ut adipisci alias maxime temporibus totam accusantium. Pariatur, magni numquam! Quibusdam, a tempore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui necessitatibus exercitationem officia optio voluptates consequuntur possimus ex, ut adipisci alias maxime temporibus totam accusantium. Pariatur, magni numquam! Quibusdam, a tempore.',
  },
  { avatar: avatar4, image: image4, text: 'short text' },
]

//TODO: add carousel https://ui.shadcn.com/docs/components/carousel
//TODO: add cardsData & numberOfUsers types

const PublicPage: React.FC = () => {
  const t = useTranslations<'PublicPage'>('PublicPage')
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
      <div className={s.cards}>
        {cardsData.map((card, i) => (
          <div className={s.cardItem} key={'cardItem' + i}>
            <div className={s.cardItemImage}>
              <Image
                alt={'Image1'}
                fill
                priority
                sizes={'300px'}
                src={card.image.src}
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
            <div className={s.cardItemAvatarTitle}>
              <Avatar>
                <AvatarImage alt={'Avatar1'} src={card.avatar.src} />
                <AvatarFallback>A1</AvatarFallback>
              </Avatar>
              <Typography variant={'h3'}>URLProfile</Typography>
            </div>
            <Typography color={'grey'} variant={'smallText'}>
              22 min ago
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
                {card.text}
              </ShowMore>
            </Typography>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PublicPage
