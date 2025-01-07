import { use } from 'react'

import { inctagramApi } from '../inctagramApi'
import {
  AllPostsOrPostDataByUserId,
  CreatePost,
  CreatePostResponse,
  DeletePost,
  PostsDataByPostId,
  UpdatePost,
} from './postsApi.types'

const postsApi = inctagramApi.injectEndpoints({
  endpoints: builder => ({
    createPost: builder.mutation<CreatePostResponse, CreatePost>({
      query: body => ({
        body,
        method: 'POST',
        url: '/v1/posts/post',
      }),
    }),
    deletePost: builder.mutation<void, DeletePost>({
      query: id => ({
        method: 'DELETE',
        url: `/v1/posts/${id}`,
      }),
    }),
    getAllPosts: builder.query<AllPostsOrPostDataByUserId, void>({
      query: () => 'v1/posts/all-posts',
    }),
    getPostsId: builder.query<PostsDataByPostId, number>({
      query: id => `/v1/posts/${id}`,
    }),
    getPostsUserId: builder.query<AllPostsOrPostDataByUserId, number>({
      query: userId => `/v1/posts/user-posts/${userId}`,
    }),
    updatePost: builder.mutation<void, UpdatePost>({
      query: ({ content, id }) => ({
        body: { content },
        method: 'PUT',
        url: `/v1/posts/${id}`,
      }),
    }),
  }),
})

export const {
  useCreatePostMutation,
  useDeletePostMutation,
  useGetAllPostsQuery,
  useGetPostsIdQuery,
  useGetPostsUserIdQuery,
  useUpdatePostMutation,
} = postsApi
