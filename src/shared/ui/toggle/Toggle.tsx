'use client'

import { useState } from 'react'

import clsx from 'clsx'

import s from './toggle.module.scss'

import { Typography } from '../typography'

type ToggleProps = {
  setToggle: (toggle: 'Month' | 'Week') => void
  toggle: 'Month' | 'Week'
}

export const Toggle = ({ setToggle, toggle }: ToggleProps) => {
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
          Week
        </Typography>
      </div>
      <div
        className={clsx(s.elToggle, toggle === 'Month' && s.isActive)}
        onClick={() => handleClick('Month')}
      >
        <Typography className={toggle === 'Month' ? s.active : s.notActive} variant={'h3'}>
          Month
        </Typography>
      </div>
    </div>
  )
}
