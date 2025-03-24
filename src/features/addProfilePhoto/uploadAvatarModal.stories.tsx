import React, { useState } from 'react'

import { Button } from '@/shared/ui/button'
import { Meta, StoryObj } from '@storybook/react'
import { NextIntlClientProvider } from 'next-intl'

import messages from '../../../messages/en.json'
import { AvatarUploadModal } from './AvatarUploadModal'

const meta: Meta<typeof AvatarUploadModal> = {
  argTypes: {
    onClose: { action: 'closed' },
    onSave: { action: 'saved' },
  },
  component: AvatarUploadModal,
  title: 'General information/AvatarUploadModal',
}

export default meta

type Story = StoryObj<typeof AvatarUploadModal>

export const Default: Story = {
  args: {
    isOpen: false,
    isOpenCroppModal: false,
    isOpenUploadModal: true,
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenUploadModal, setIsOpenUploadModal] = useState(true)
    const [isOpenCroppModal, setIsOpenCroppModal] = useState(false)

    return (
      <NextIntlClientProvider locale={'en'} messages={messages}>
        <Button onClick={() => setIsOpen(true)}>Upload</Button>
        {isOpen && (
          <AvatarUploadModal
            {...args}
            isOpen={isOpen}
            isOpenCroppModal={isOpenCroppModal}
            isOpenUploadModal={isOpenUploadModal}
            onClose={() => setIsOpen(false)}
            setIsOpenCroppModal={setIsOpenCroppModal}
            setIsOpenUploadModal={setIsOpenUploadModal}
          />
        )}
      </NextIntlClientProvider>
    )
  },
}
