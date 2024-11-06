'use client'

import React, { useState } from 'react'
import ReCAPTCHA, { ReCAPTCHAProps } from 'react-google-recaptcha'

import clsx from 'clsx'

import s from './recaptcha.module.scss'

export type RecaptchaProps = {
  error?: string
  onChange?: (token: null | string) => void
  sitekey: string
} & Omit<ReCAPTCHAProps, 'sitekey'>

const Recaptcha = ({ error, onChange, sitekey }: RecaptchaProps) => {
  return (
    <div className={clsx(s.recaptchaContainer, error && s.error)}>
      <ReCAPTCHA hl={'en'} onChange={onChange} sitekey={sitekey} theme={'dark'} />
      {error && <div className={s.errorMessage}>Please verify that you are not a robot</div>}
    </div>
  )
}

export default Recaptcha
