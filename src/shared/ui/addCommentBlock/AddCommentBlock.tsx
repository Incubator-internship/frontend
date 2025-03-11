'use client'

import React from 'react'

import { Typography } from '@/shared/ui/typography'
import { useTranslations } from 'next-intl'

import s from './addCommentBlock.module.scss'

const AddCommentBlock: React.FC = () => {
  const t = useTranslations<'HomePage'>('HomePage')

  return (
    <div className={s.postAddComment}>
      <input className={s.postInput} placeholder={t('Add a Comment')} type={'text'} />
      <Typography as={'a'} color={'link'} variant={'h3'}>
        {t('Publish')}
      </Typography>
    </div>
  )
}

export default AddCommentBlock
