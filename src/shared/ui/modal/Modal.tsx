import React, { useState } from 'react'

import ArrowLeft from '@/shared/assets/icons/ArrowLeft'
import Close from '@/shared/assets/icons/Close'

import s from './modal.module.scss'

import { Typography } from '../typography'

export type ModalProps = {
  children?: React.ReactNode
  isOpen?: boolean
  isStepMode?: boolean
  onClose?: () => void
  onFinish?: () => void
  onNext?: () => void
  steps?: React.ReactNode[]
  title?: string | string[]
}

export const Modal = ({
  children,
  isOpen = true,
  isStepMode = false,
  onClose,
  onFinish,
  // onNext,
  steps = [],
  title,
}: ModalProps) => {
  const [step, setStep] = useState(0)

  if (!isOpen) {
    return null
  }

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose?.()
    }
  }

  const goToNext = () => {
    // onNext?.()
    setStep(prevStep => Math.min(prevStep + 1, steps.length - 1))
  }

  const goToPrevious = () => {
    setStep(prevStep => Math.max(prevStep - 1, 0))
  }

  const finishHandler = () => {
    onFinish?.()
    onClose?.()
  }

  return (
    <div className={s.backdrop} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <div className={s.head}>
          {isStepMode ? (
            <div className={s.headWrapp}>
              {step > 0 && (
                <button onClick={goToPrevious} type={'button'}>
                  <ArrowLeft />
                </button>
              )}
              <Typography as={'h2'}>{title && title[step]}</Typography>
              {step < steps.length - 1 && (
                <button onClick={goToNext} type={'button'}>
                  Next
                </button>
              )}
              {step === steps.length - 1 && (
                <button onClick={finishHandler} type={'button'}>
                  finish
                </button>
              )}
            </div>
          ) : (
            <>
              <Typography as={'h2'}>{title}</Typography>
              <button onClick={onClose} type={'button'}>
                <Close className={s.close}></Close>
              </button>
            </>
          )}
        </div>
        <div className={s.body}>{isStepMode ? steps[step] : children}</div>
      </div>
    </div>
  )
}
