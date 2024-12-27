'use client'

import { useState } from 'react'

import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import s from './toggle.module.scss'

import { Typography } from '../typography'

type ToggleProps = {
  setToggle: (toggle: 'Month' | 'Week') => void
  toggle: 'Month' | 'Week'
}

export const Toggle = ({ setToggle, toggle }: ToggleProps) => {
  const t = useTranslations('StatisticPage')
  const handleClick = (toggle: 'Month' | 'Week') => {
    setToggle(toggle)
  }

  return (
    <div className={s.toggle}>
      <div
        className={clsx(s.elToggle, toggle === 'Week' && s.isActive)}
        onClick={() => handleClick('Week')}
      >
        <Typography className={toggle === 'Week' ? s.active : s.notActive} variant={'h3'}>
          {t('Week')}
        </Typography>
      </div>
      <div
        className={clsx(s.elToggle, toggle === 'Month' && s.isActive)}
        onClick={() => handleClick('Month')}
      >
        <Typography className={toggle === 'Month' ? s.active : s.notActive} variant={'h3'}>
          {t('Month')}
        </Typography>
      </div>
    </div>
  )
}
