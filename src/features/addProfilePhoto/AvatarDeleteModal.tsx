import React from 'react'

import { Button } from '@/shared/ui/button'
import { Modal } from '@/shared/ui/modal'
import { Typography } from '@/shared/ui/typography'
import { useTranslations } from 'next-intl'

type Props = {
  deleteAva: () => void
  isOpen: boolean
  onClose?: () => void
  onSaveDraft?: () => void
}

export const AvatarDeleteModal = ({ deleteAva, isOpen, onClose }: Props) => {
  const t = useTranslations('AvaDeleteModal')

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} title={t('title')}>
        <Typography
          style={{ marginBottom: '50px', marginTop: '15px', padding: '10px' }}
          variant={'regularText16'}
        >
          {t('body')}
        </Typography>
        <div style={{ display: 'flex', gap: '50px', justifyContent: 'end', marginTop: '10px' }}>
          <Button onClick={onClose} variant={'transparent'}>
            {t('btnDiscard')}
          </Button>
          <Button onClick={deleteAva}>{t('btnDelete')}</Button>
        </div>
      </Modal>
    </div>
  )
}
