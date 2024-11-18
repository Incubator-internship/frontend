import { baseQueryWithReauth } from '@/app/api/inctagramBaseQuery'
import { createApi } from '@reduxjs/toolkit/query/react'

export const inctagramApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({
    getUsers: builder.query({
      query: name => `v1/users`,
    }),
  }),
  reducerPath: 'inctagramApi',
})

export const { useGetUsersQuery } = inctagramApi
