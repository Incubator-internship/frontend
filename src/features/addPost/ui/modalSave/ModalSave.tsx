import React from 'react'

import { Button } from '@/shared/ui/button'
import { Modal } from '@/shared/ui/modal'
import { Typography } from '@/shared/ui/typography'

type Props = {
  isOpen: boolean
  onClose?: () => void
  onDiscard?: () => void
  onSaveDraft?: () => void
  stateModal?: boolean
}

export const ModalSave = ({ isOpen, onClose, onDiscard, onSaveDraft, stateModal }: Props) => {
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} title={'Close'}>
        <Typography style={{ padding: '10px' }} variant={'regularText16'}>
          Do you really want to close the creation of a publication? If you close everything will be
          deleted
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <Button onClick={onDiscard} variant={'transparent'}>
            Discard
          </Button>
          <Button onClick={onSaveDraft}>Save draft</Button>
        </div>
      </Modal>
    </div>
  )
}
