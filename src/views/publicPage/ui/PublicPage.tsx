'use client'

import { Card } from '@/shared/ui/card'
import { Typography } from '@/shared/ui/typography'

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
        <Card className={s.cardItem}>This is a default card</Card>
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
