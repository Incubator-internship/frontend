import React from 'react'

import { Button } from '@/shared/ui/button'
import { Modal } from '@/shared/ui/modal'
import { Typography } from '@/shared/ui/typography'
import { useTranslations } from 'next-intl'

type Props = {
  isOpen: boolean
  onClose?: () => void
  onDiscard?: () => void
  onSaveDraft?: () => void
}

export const ModalSave = ({ isOpen, onClose, onDiscard, onSaveDraft }: Props) => {
  const t = useTranslations('modalClosePost')

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} title={t('title')}>
        <Typography style={{ padding: '10px' }} variant={'regularText16'}>
          {t('body')}
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <Button onClick={onDiscard} variant={'transparent'}>
            {t('btnDiscard')}
          </Button>
          <Button onClick={onSaveDraft}>{t('btnSavedraft')}</Button>
        </div>
      </Modal>
    </div>
  )
}
