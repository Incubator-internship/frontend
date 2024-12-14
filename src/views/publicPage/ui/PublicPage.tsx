'use client'

import avatar1 from '@/shared/assets/images/avatars/avatar1.webp'
import image1 from '@/shared/assets/images/publicImages/image1.webp'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar/Avatar'
import { Card } from '@/shared/ui/card'
import { Typography } from '@/shared/ui/typography'
import Image from 'next/image'

import s from './publicPage.module.scss'

function PublicPage() {
  const numberOfUsers: string = '009213'

  return (
    <div className={s.wrapper}>
      <div className={s.registeredUsers}>
        <Typography variant={'h2'}>Registered users:</Typography>
        <Typography className={s.registeredUserValue} variant={'h2'}>
          {numberOfUsers.split('').map((number, i) => (
            <span className={s.el} key={number + i}>
              {number}
            </span>
          ))}
        </Typography>
      </div>
      <div className={s.cards}>
        <Card className={s.cardItem}>
          <Image alt={'image1'} height={240} src={image1.src} width={234} />
          <Avatar>
            <AvatarImage alt={'Avatar1'} src={avatar1.src} />
            <AvatarFallback>A1</AvatarFallback>
          </Avatar>
          <Typography variant={'h3'}>URLProfile</Typography>
        </Card>
        <Card className={s.cardItem}>This is a default card</Card>
        <Card className={s.cardItem}>This is a default card</Card>
        <Card className={s.cardItem}>This is a default card</Card>
        <Card className={s.cardItem}>This is a default card</Card>
        <Card className={s.cardItem}>This is a default card</Card>
        <Card className={s.cardItem}>This is a default card</Card>
        <Card className={s.cardItem}>This is a default card</Card>
      </div>
    </div>
  )
}

export default PublicPage
