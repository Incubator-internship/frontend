import { useState } from 'react'

import { AvatarUploadModal } from '@/features/addProfilePhoto/AvatarUploadModal'
import ImageIcon from '@/shared/assets/icons/ImageIcon'
import Ava from '@/shared/assets/images/avatars/avatar1.webp'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar'
import { Button } from '@/shared/ui/button'
import { Meta, StoryObj } from '@storybook/react'
import { NextIntlClientProvider } from 'next-intl'

import s from './profilePhoto.module.scss'

interface ProfilePhotoProps {
  avatarSrc?: string
}

const ProfilePhotoComponent = ({ avatarSrc }: ProfilePhotoProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [avatar, setAvatar] = useState<{ preview: string } | null>(
    avatarSrc ? { preview: avatarSrc } : null
  )

  const handleSaveAvatar = (selectedAvatar: { preview: string }) => {
    setAvatar(selectedAvatar)
    setIsModalOpen(false)
  }

  return (
    <div className={s.container}>
      <div className={s.avatarWrapper}>
        {avatar ? (
          <>
            <Avatar className={s.ava}>
              <AvatarImage alt={'Profile avatar'} src={avatar.preview} />
              <AvatarFallback>
                <ImageIcon />
              </AvatarFallback>
            </Avatar>
            <div className={s.closeButton} onClick={() => setAvatar(null)}>
              ✖
            </div>
          </>
        ) : (
          <Avatar className={s.ava}>
            <AvatarFallback>
              <ImageIcon />
            </AvatarFallback>
          </Avatar>
        )}
      </div>

      <Button onClick={() => setIsModalOpen(true)} type={'button'} variant={'transparent'}>
        Add a Profile Photo
      </Button>

      {isModalOpen && (
        <AvatarUploadModal
          isOpen={isModalOpen}
          isOpenCroppModal={false}
          isOpenUploadModal
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveAvatar}
          setIsOpenCroppModal={() => {}}
          setIsOpenUploadModal={() => {}}
        />
      )}
    </div>
  )
}

const meta: Meta<ProfilePhotoProps> = {
  argTypes: {
    avatarSrc: {
      control: 'text',
      description: 'URL image avatar',
    },
  },
  component: ProfilePhotoComponent,
  decorators: [
    Story => (
      <NextIntlClientProvider locale={'en'} messages={{}}>
        <Story />
      </NextIntlClientProvider>
    ),
  ],
  tags: ['autodocs'],
  title: 'General information/ProfilePhoto',
}

export default meta
type Story = StoryObj<ProfilePhotoProps>

export const EmptyAvatar: Story = {
  args: {
    avatarSrc: '',
  },
  name: 'Empty Avatar',
  render: args => <ProfilePhotoComponent {...args} />,
}

export const WithAvatar: Story = {
  args: {
    avatarSrc: Ava.src,
  },
  name: 'With Avatar',
  render: args => <ProfilePhotoComponent {...args} />,
}
