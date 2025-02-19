import React, { useState } from 'react'

import { Button } from '../../button/Button'
import { Typography } from '../../typography/Typography'
import { Modal } from '../Modal'

type ModalCloseDeleteUnfollowPostProps = {
  variant: 'close' | 'delete' | 'unfollow'
}

export const ModalCloseDeleteUnfollowPost: React.FC<ModalCloseDeleteUnfollowPostProps> = ({
  variant,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  const handleClose = () => {
    setIsOpen(false)
  }

  let title = 'Close Post'
  let message =
    'Do you really want to close the edition of the publication? If you close changes won’t be saved'

  switch (variant) {
    case 'close':
      title
      message
      break
    case 'delete':
      title = 'Delete Post'
      message = 'Are you sure you want to delete this post?'
      break
    case 'unfollow':
      title = 'Unfollow'
      message = 'Do you really want to unfollow from this user?'
      break
  }

  return (
    <div style={{ maxWidth: '380px' }}>
      <Modal isOpen={isOpen} onClose={handleClose} title={title}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ alignItems: 'center', display: 'flex' }}>
            <Typography as={'p'} style={{ marginLeft: '15px' }} variant={'body1'}>
              {message}
            </Typography>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '15px' }}>
            <Button style={{ marginTop: '20px', padding: '6px 36px' }} variant={'transparent'}>
              Yes
            </Button>
            <Button
              onClick={handleClose}
              style={{ marginLeft: '15px', marginTop: '20px', padding: '6px 36px' }}
            >
              No
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
