import { useCallback, useEffect, useRef, useState } from 'react'

import { useGetAllPostsQuery } from '@/app/api/posts/postsApi'
import { PostsDataByPostId } from '@/app/api/posts/postsApi.types'
import { debounce } from 'lodash'

const useInfiniteScroll = (pageSize: number = 4) => {
  const [cursor, setCursor] = useState<number | undefined>(undefined)
  const [posts, setPosts] = useState<PostsDataByPostId[]>([])
  const [hasNextPage, setHasNextPage] = useState<boolean>(true)
  const [isFetchingMore, setIsFetchingMore] = useState<boolean>(false)
  const loadMoreRef = useRef(null)

  const { data, isFetching, isLoading } = useGetAllPostsQuery(
    { cursor, pageSize },
    {
      skip: !hasNextPage || isFetchingMore,
    }
  )

  useEffect(() => {
    if (data && isFetchingMore) {
      setPosts(prevPosts => [...prevPosts, ...data.posts])
      if (data.nextCursor === null) {
        setHasNextPage(false)
      } else {
        setCursor(data.nextCursor)
      }
      setIsFetchingMore(false)
    }
  }, [data, isFetchingMore])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleLoadMore = useCallback(
    debounce(() => {
      if (hasNextPage && !isFetching && !isFetchingMore) {
        setIsFetchingMore(true)
      }
    }, 1500),
    [hasNextPage, isFetching, isFetchingMore]
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          handleLoadMore()
        }
      },
      { threshold: 0.5 }
    )

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current)
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current)
      }
    }
  }, [handleLoadMore])

  return { isFetching, isLoading, loadMoreRef, posts, isFetchingMore }
}

export default useInfiniteScroll
