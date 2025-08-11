'use client'

import React, { useState } from 'react'

import { useGetMeQuery } from '@/app/api/auth/authApi'
import { useGetProfileQuery } from '@/app/api/users/usersApi'
import {
  BookmarkOutlineIcon,
  HeartOutlineIcon,
  MessageCircleOutlineIcon,
  PaperPlaneOutlineIcon,
} from '@/shared/assets/icons'
import PensilIcon from '@/shared/assets/icons/PensilIcon'
import TrashIcon from '@/shared/assets/icons/TrashIcon'
import { AddCommentBlock } from '@/shared/ui/addCommentBlock/AddCommentBlock'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar/Avatar'
import DropdownMenuDemo from '@/shared/ui/dropdownMenu/DropdownMenu'
import Loader, { MainLoader } from '@/shared/ui/loader/Loader'
import { Modal } from '@/shared/ui/modal'
import { ModalCloseDeleteUnfollowPost } from '@/shared/ui/modal/modalCreateOrDeletePost/ModalCloseDeleteUnfollowPost'
import { Typography } from '@/shared/ui/typography'
import useInfiniteScroll from '@/shared/utils/infiniteScroll'
import { UpdatePostModal } from '@/views/publicPageModal/ui/updatePostModal/UpdatePostModal'
import { skipToken } from '@reduxjs/toolkit/query'
import { formatDistanceToNow } from 'date-fns'
import { enGB, ru } from 'date-fns/locale'
import { useTranslations } from 'next-intl'

import s from './feedPage.module.scss'
import ImageIcon from '@/shared/assets/icons/ImageIcon'

const FeedPage: React.FC = () => {
  //TODO: id users which is following

  const t = useTranslations<'FeedPage'>('FeedPage')
  const { isFetchingMore, isLoading, loadMoreRef, posts } = useInfiniteScroll(4)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isOpenEditModal, setIsOpenEditModal] = useState(false)
  const { data: meData } = useGetMeQuery()
  const { data: dataUser } = useGetProfileQuery(meData?.userId ?? skipToken)
  const nickName = meData?.login
  const avatarSmall = dataUser?.smallAvatarUrl

  const handleDeletePost = () => {
    setIsOpenModal(false)
  }

  if (isLoading) {
    return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', gap: '15px'}}>
      Loading...
      <MainLoader />
      </div>
  }

  return (
    <div style={{ display: 'flex' }}>
      <div className={s.postWrapper}>
        {posts.length === 0 ? (
          <>
            <Typography variant={'h3'}>Loading</Typography>
            <Loader />
          </>
        ) : (
          posts.map(post => (
            <div className={s.postItem} key={post.id}>
              <div className={s.postAvatarTitle}>
                <Avatar size='small'>
                  <AvatarImage alt={'Avatar'} src={avatarSmall} />
                  <AvatarFallback><ImageIcon /></AvatarFallback>
                </Avatar>
                <Typography variant={'h3'}>{nickName}</Typography>
                {post.updatedAt && (
                  <Typography color={'grey'} variant={'smallText'}>
                    {formatDistanceToNow(new Date(post.updatedAt), {
                      addSuffix: true,
                      locale: t('locale') === 'ru' ? ru : enGB,
                    })}
                  </Typography>
                )}
                <Typography className={s.lastChild} variant={'h2'}>
                  <DropdownMenuDemo
                    content={[
                      {
                        icon: <PensilIcon />,
                        label: 'Edit Post',
                        onSelect: () => setIsOpenEditModal(true),
                      },
                      {
                        icon: <TrashIcon />,
                        label: 'Delete Post',
                        onSelect: () => setIsOpenModal(true),
                      },
                    ]}
                  />
                </Typography>
              </div>
              <img alt={`Post ${post.id}`} className={s.postImage} src={post.photos[0].url} />
              <div className={s.postFooter}>
                <div className={s.postIcons}>
                  <HeartOutlineIcon />
                  <MessageCircleOutlineIcon />
                  <PaperPlaneOutlineIcon />
                  <BookmarkOutlineIcon className={s.lastChild} />
                </div>
                <div className={s.postContent}>
                  <Avatar>
                    <AvatarImage alt={'Avatar'} src={avatarSmall} />
                    <AvatarFallback>AF</AvatarFallback>
                  </Avatar>
                  <Typography variant={'boldText14'}>
                    {nickName} {post.content}
                  </Typography>
                </div>
                <AddCommentBlock />
              </div>
            </div>
          ))
        )}
        <div ref={loadMoreRef} style={{ height: '20px' }} />
        {isFetchingMore && <Loader />}
      </div>

      {isOpenModal && (
        <ModalCloseDeleteUnfollowPost
          isOpenModal={isOpenModal}
          onCloseModal={() => setIsOpenModal(false)}
          onDelete={handleDeletePost}
          variant={'delete'}
        />
      )}
      {isOpenEditModal && (
        <Modal
          className={s.editModal}
          isOpen={isOpenEditModal}
          onClose={() => setIsOpenEditModal(false)}
          title={'Edit Post'}
        >
          <UpdatePostModal setIsOpenEditModal={setIsOpenEditModal} />
        </Modal>
      )}
    </div>
  )
}

export default FeedPage
