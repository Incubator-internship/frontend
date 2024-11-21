import { baseQueryWithReauth } from '@/app/api/inctagramBaseQuery'
import { createApi } from '@reduxjs/toolkit/query/react'

export const inctagramApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({
    getUsers: builder.query({
      query: name => `v1/users`,
    }),
    newPassword: builder.mutation<void, { newPassword: string; recoveryCode: string }>({
      query: body => ({
        body,
        method: 'POST',
        url: `/v1/auth/new-password`,
      }),
    }),
  }),
  reducerPath: 'inctagramApi',
})

export const { useGetUsersQuery, useNewPasswordMutation } = inctagramApi
