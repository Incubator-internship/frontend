import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { useGetPostsIdQuery } from '@/app/api/posts/postsApi'
import Close from '@/shared/assets/icons/Close'
import { PostFormData } from '@/shared/model/schemas/schemas'
import { Button } from '@/shared/ui/button'
import { Carousel } from '@/shared/ui/carousel'
import { ModalCloseDeleteUnfollowPost } from '@/shared/ui/modal/modalCreateOrDeletePost'
import { ModalComments } from '@/shared/ui/modalComments'
import { ProfileData } from '@/shared/ui/modalComments/profileData'
import { TextareaWithControl } from '@/shared/ui/textareaControl'
import { Typography } from '@/shared/ui/typography'
import { skipToken } from '@reduxjs/toolkit/query'
import clsx from 'clsx'

import s from './editPostModal.module.scss'

export type EditPostModalProps = {
  isOpen?: boolean
  onClose?: () => void
  postId?: null | number
}

export const EdditPostModal = ({ isOpen = true, onClose, postId }: EditPostModalProps) => {
  const { control, watch } = useFormContext<PostFormData>()
  const descriptionValue = watch('description') || ''

  const { data, isError, isLoading } = useGetPostsIdQuery(postId ?? skipToken)
  const [isCloseModalOpen, setIsCloseModalOpen] = useState(false)

  if (!isOpen) {
    return null
  }

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      setIsCloseModalOpen(true)
    }
  }

  const handleCloseModal = () => {
    setIsCloseModalOpen(false)
    onClose?.()
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error loading post data.</div>
  }

  if (!data || !data.photos) {
    return <div>No data</div>
  }

  return (
    <div className={s.backdrop} onClick={handleBackdropClick}>
      <div className={s.publicPageModule} onClick={e => e.stopPropagation()}>
        <button onClick={() => setIsCloseModalOpen(true)} type={'button'}>
          <Close className={s.close}></Close>
        </button>
        <Carousel photos={data.photos} />
        <div>
          <ProfileData imageUrl={''} profileUrl={''} />
          <form>
            <TextareaWithControl
              control={control}
              label={'Add publication descriptions'}
              maxLength={500}
              name={'description'}
              placeholder={'Text-area'}
            />
            <Typography
              className={clsx(s.count, { [s.maxCharacters]: descriptionValue.length >= 500 })}
              variant={'body2'}
            >
              {`${descriptionValue.length}/500`}
            </Typography>
          </form>
          <Button variant={'primary'}>Save Changes</Button>
        </div>
      </div>

      {isCloseModalOpen && (
        <ModalCloseDeleteUnfollowPost
          isOpenPublickModal={isCloseModalOpen}
          onClosePublickModal={() => setIsCloseModalOpen(false)}
          onDelete={handleCloseModal}
          variant={'close'}
        />
      )}
    </div>
  )
}
