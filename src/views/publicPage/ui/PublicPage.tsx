import fetchPosts from '@/app/api/posts/fetchPosts'
import { AllPosts } from '@/app/api/posts/postsApi.types'
import { Typography } from '@/shared/ui/typography'
import { getTranslations } from 'next-intl/server'

import s from './publicPage.module.scss'

import Post from './Post'

const PublicPage = async () => {
  const data: AllPosts = await fetchPosts()
  const t = await getTranslations('PublicPage')
  const { posts } = data

  // const { nextCursor, posts } = data //TODO: for future pagination

  //TODO: fetch users count
  const numberOfUsers: string = '9213'

  return (
    <div className={s.wrapper}>
      <div className={s.registeredUsers}>
        <Typography variant={'h2'}>{t('Registered users:')}</Typography>
        <Typography className={s.registeredUserValue} variant={'h2'}>
          {numberOfUsers
            .padStart(numberOfUsers.length + 2, '0')
            .split('')
            .map((number, i) => (
              <span className={s.el} key={i}>
                {number}
              </span>
            ))}
        </Typography>
      </div>
      <div className={s.posts}>
        {posts && posts.map(post => <Post key={post.id} post={post} />)}
      </div>
    </div>
  )
}

export default PublicPage
