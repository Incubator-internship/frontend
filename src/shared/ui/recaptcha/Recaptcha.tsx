'use client'

import React, { useState } from 'react'
import ReCAPTCHA, { ReCAPTCHAProps } from 'react-google-recaptcha'

import styles from './recaptcha.module.scss'

export type RecaptchaProps = {
  error: string
  siteKey: string
} & Omit<ReCAPTCHAProps, 'sitekey'>

const RecaptchaComponent = ({ error, siteKey }: RecaptchaProps) => {
  const [loading, setLoading] = useState(false)
  const [checked, setChecked] = useState(false)
  const [expired, setExpired] = useState(false)

  const handleExpire = () => {
    setExpired(true)
    setChecked(false)
  }

  return (
    <div className={styles.recaptchaContainer}>
      <ReCAPTCHA onExpired={handleExpire} onLoad={() => setLoading(true)} sitekey={siteKey} />
      {error && <div className={styles.error}>Please verify that you are not a robot</div>}
      {expired && <div>Verification expired. Check the checkbox again.</div>}
    </div>
  )
}

export default RecaptchaComponent
