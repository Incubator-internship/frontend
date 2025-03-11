import { User } from '@/app/api/inctagramApi.types'
import { baseQueryWithReauth } from '@/app/api/inctagramBaseQuery'
import { createApi } from '@reduxjs/toolkit/query/react'

export const inctagramApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({
    getUsers: builder.query<User[], void>({
      query: () => '/v1/users',
    }),
  }),
  reducerPath: 'inctagramApi',
  tagTypes: ['Post', 'Posts', 'UserPosts'],
})

export const { useGetUsersQuery } = inctagramApi
