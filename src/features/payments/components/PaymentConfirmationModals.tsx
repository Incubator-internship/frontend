import { Button } from '@/shared/ui/button'
import { Modal } from '@/shared/ui/modal'
import { Typography } from '@/shared/ui/typography'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

export const PaymentConfirmationModals = () => {
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
        <Modal isOpen={isSuccessModalOpen} title={'Create payments'} onClose={onErrorClose}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '50px',
            }}
          >
            <Typography as={'p'} variant={'body1'}>
              Payment was successful!
            </Typography>
            <Button fullWidth={true} onClick={onSuccessClose}>
              OK
            </Button>
          </div>
        </Modal>
      )}
      {search === 'false' && (
        <Modal isOpen={isErrorModalOpen} title={'Create payments'} onClose={onSuccessClose}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '50px',
            }}
          >
            <Typography as={'p'} variant={'body1'}>
              Error Transaction failed. Please, write to support Back to payment
            </Typography>
            <Button fullWidth={true} onClick={onErrorClose}>
              Back to payment
            </Button>
          </div>
        </Modal>
      )}
    </>
  )
}
