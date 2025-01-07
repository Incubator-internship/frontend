import { inctagramApi } from '../inctagramApi'
import { AllPostsOrPostDataByUserId, PostsDataByPostId } from './postsApi.types'

const postsApi = inctagramApi.injectEndpoints({
  endpoints: builder => ({
    getAllPosts: builder.query<AllPostsOrPostDataByUserId, void>({
      query: () => 'v1/posts/all-posts',
    }),
    getPostsId: builder.query<PostsDataByPostId, number>({
      query: id => `/v1/posts/${id}`,
    }),
    getPostsUserId: builder.query<AllPostsOrPostDataByUserId, number>({
      query: userId => `/v1/posts/user-posts/${userId}`,
    }),
  }),
})

export const { useGetAllPostsQuery, useGetPostsIdQuery, useGetPostsUserIdQuery } = postsApi
