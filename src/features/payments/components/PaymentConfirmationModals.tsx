import { Button } from '@/shared/ui/button'
import { Modal } from '@/shared/ui/modal'
import { Typography } from '@/shared/ui/typography'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import {useTranslations} from 'next-intl'

export const PaymentConfirmationModals = () => {
  const t = useTranslations('AccountManagements')
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(true)
  const [isErrorModalOpen, setIisErrorModalOpen] = useState(true)

  const { replace } = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const search = searchParams.get('success')

  const onErrorClose = () => {
    setIisErrorModalOpen(false)
    replace(pathname)
  }

  const onSuccessClose = () => {
    setIsSuccessModalOpen(false)
    replace(pathname)
  }

  return (
    <>
      {search === 'true' && (
        <Modal isOpen={isSuccessModalOpen} title={t('TittleSuccess')} onClose={onErrorClose}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '50px',
            }}
          >
            <Typography as={'p'} variant={'body1'}>
              {t('PaymentSuccess')}
            </Typography>
            <Button fullWidth={true} onClick={onSuccessClose}>
              {t('Ok')}
            </Button>
          </div>
        </Modal>
      )}
      {search === 'false' && (
        <Modal isOpen={isErrorModalOpen} title={t('TitleError')} onClose={onSuccessClose}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '50px',
            }}
          >
            <Typography as={'p'} variant={'body1'}>
              {t('ErrorPayment')}
            </Typography>
            <Button fullWidth={true} onClick={onErrorClose}>
              {t('BackToPayment')}
            </Button>
          </div>
        </Modal>
      )}
    </>
  )
}
