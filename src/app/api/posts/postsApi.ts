import { inctagramApi } from '../inctagramApi'
import {
  AllPosts,
  CreatePostResponse,
  DeletePost,
  PostDataByUserId,
  PostsDataByPostId,
  UpdatePost,
} from './postsApi.types'

const postsApi = inctagramApi.injectEndpoints({
  endpoints: builder => ({
    createPost: builder.mutation<CreatePostResponse, FormData>({
      invalidatesTags: ['UserPosts'],
      query: bodyFormData => ({
        body: bodyFormData,
        method: 'POST',
        url: '/v1/posts/post',
      }),
    }),
    deletePost: builder.mutation<void, DeletePost>({
      invalidatesTags: ['Post', 'Posts'],
      query: ({ id }) => ({
        method: 'DELETE',
        url: `/v1/posts/${id}`,
      }),
    }),
    getAllPosts: builder.query<AllPosts, void>({
      providesTags: ['Posts'],
      query: () => 'v1/posts/all-posts',
    }),
    getPostsId: builder.query<PostsDataByPostId, number>({
      providesTags: ['Post'],
      query: id => `/v1/posts/${id}`,
    }),
    getPostsUserId: builder.query<PostDataByUserId, number>({
      providesTags: ['UserPosts'],
      query: userId => `/v1/posts/user-posts/${userId}`,
    }),
    updatePost: builder.mutation<void, UpdatePost>({
      invalidatesTags: ['Post'],
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
