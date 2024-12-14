'use client'

import { Card } from '@/shared/ui/card'

import s from './publicPage.module.scss'

function PublicPage() {
  return (
    <div className={s.wrapper}>
      <div className={s.registeredUsers}>Registered users: 009213</div>
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
