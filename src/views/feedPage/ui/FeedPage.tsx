'use client'

import React, { useState } from 'react'

import { useGetMeQuery } from '@/app/api/auth/authApi'
import { useGetPostsUserIdQuery } from '@/app/api/posts/postsApi'
import { useGetProfileQuery } from '@/app/api/users/usersApi'
import {
  BookmarkOutlineIcon,
  HeartOutlineIcon,
  MessageCircleOutlineIcon,
  PaperPlaneOutlineIcon,
} from '@/shared/assets/icons'
import PensilIcon from '@/shared/assets/icons/PensilIcon'
import TrashIcon from '@/shared/assets/icons/TrashIcon'
import avatar1 from '@/shared/assets/images/avatars/avatar1.webp'
import { AddCommentBlock } from '@/shared/ui/addCommentBlock/AddCommentBlock'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar/Avatar'
import DropdownMenuDemo from '@/shared/ui/dropdownMenu/DropdownMenu'
import { Modal } from '@/shared/ui/modal'
import { ModalCloseDeleteUnfollowPost } from '@/shared/ui/modal/modalCreateOrDeletePost/ModalCloseDeleteUnfollowPost'
import { Typography } from '@/shared/ui/typography'
import { UpdatePostModal } from '@/views/publicPageModal/ui/updatePostModal/UpdatePostModal'
import { skipToken } from '@reduxjs/toolkit/query'
import { formatDistanceToNow } from 'date-fns'
import { enGB, ru } from 'date-fns/locale'
import { useTranslations } from 'next-intl'

import s from './feedPage.module.scss'

const FeedPage: React.FC = () => {
  //TODO: id users which is following

  const t = useTranslations<'FeedPage'>('FeedPage')

  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isOpenEditModal, setIsOpenEditModal] = useState(false)
  const { data: meData } = useGetMeQuery()
  const { data: posts, error, isLoading } = useGetPostsUserIdQuery(meData?.userId ?? skipToken)
  const { data: dataUser } = useGetProfileQuery(meData?.userId ?? skipToken)
  const nickName = meData?.login
  const avatarSmall = dataUser?.smallAvatarUrl

  const updatedAt = posts && posts[0]?.updatedAt

  const handleDeletePost = () => {
    setIsOpenModal(false)
  }

  return (
    <div style={{ display: 'flex' }}>
      <div className={s.postWrapper}>
        <div className={s.postAvatarTitle}>
          <Avatar>
            <AvatarImage alt={'Avatar1'} src={avatarSmall} />
            <AvatarFallback>AF</AvatarFallback>
          </Avatar>

          <Typography variant={'h3'}>{nickName}</Typography>
          {updatedAt && (
            <Typography color={'grey'} variant={'smallText'}>
              {formatDistanceToNow(new Date(updatedAt), {
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

        {posts && <img alt={'Image1'} className={s.postImage} src={posts[0].photos[0].url} />}

        <div className={s.postFooter}>
          <div className={s.postIcons}>
            <HeartOutlineIcon />
            <MessageCircleOutlineIcon />
            <PaperPlaneOutlineIcon />
            <BookmarkOutlineIcon className={s.lastChild} />
          </div>
          <div className={s.postContent}>
            <Avatar>
              <AvatarImage alt={'Avatar1'} src={avatarSmall} />
              <AvatarFallback>AF</AvatarFallback>
            </Avatar>
            <Typography variant={'boldText14'}>
              {nickName} {posts && posts[0]?.content}
            </Typography>
          </div>
          <div className={s.postLikes}>
            {[1, 2, 3].map(item => (
              <Avatar className={s.smallAvatar} key={item}>
                <AvatarImage alt={`Avatar ${item}`} src={avatar1.src} />
                <AvatarFallback>AF</AvatarFallback>
              </Avatar>
            ))}
            <Typography variant={'smallText'}>2 243 &quot;Like&quot;</Typography>
          </div>
          <Typography className={s.postComments} color={'grey'} variant={'boldText14'}>
            {t('View All Comments')} (114)
          </Typography>
          {/* <div className={s.postAddComment}>
            <input className={s.postInput} placeholder={t('Add a Comment')} type={'text'} />
            <Typography as={'a'} color={'link'} variant={'h3'}>
              {t('Publish')}
            </Typography>
          </div> */}
          <AddCommentBlock />
        </div>
      </div>
    </div>
  )
}

export default FeedPage
