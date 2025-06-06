'use client'
import React, { useState } from 'react'

import { useDeletePostMutation } from '@/app/api/posts/postsApi'
import { useSearchParams } from 'next/navigation'

import s from './modalCloseDeleteUnfollowPost.module.scss'

import { Button } from '../../button/Button'
import { Typography } from '../../typography/Typography'
import { Modal } from '../Modal'

type ModalCloseDeleteUnfollowPostProps = {
  isOpenModal: boolean
  onCloseModal: () => void
  onCloseParentModal?: () => void
  onDelete: () => void
  variant: 'close' | 'delete' | 'unfollow'
}

export const ModalCloseDeleteUnfollowPost: React.FC<ModalCloseDeleteUnfollowPostProps> = ({
  isOpenModal,
  onCloseModal,
  onCloseParentModal,
  onDelete,
  variant,
}) => {
  const params = useSearchParams()
  const postId = params.get('postId')
  const [deletePost] = useDeletePostMutation()

  const handleDeletePost = async () => {
    if (postId) {
      try {
        await deletePost({ id: +postId }).unwrap()
        onDelete()
        onCloseModal()
        onCloseParentModal?.()
      } catch (error) {
        console.error('Failed to delete the post:', error)
      }
    }
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
    <div className={s.modal} style={{ maxWidth: '380px' }}>
      <Modal isOpen={isOpenModal} onClose={onCloseModal} title={title}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ alignItems: 'center', display: 'flex' }}>
            <Typography as={'p'} style={{ marginLeft: '15px' }} variant={'body1'}>
              {message}
            </Typography>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '15px' }}>
            <Button
              onClick={variant === 'delete' ? handleDeletePost : onCloseModal}
              style={{ marginTop: '20px', padding: '6px 36px' }}
              variant={'transparent'}
            >
              Yes
            </Button>
            <Button
              onClick={onCloseModal}
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
