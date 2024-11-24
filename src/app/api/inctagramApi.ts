import { baseQueryWithReauth } from '@/app/api/inctagramBaseQuery'
import { createApi } from '@reduxjs/toolkit/query/react'

export const inctagramApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => '/v1/users',
    }),

    logout: builder.mutation<void, void>({
      query: () => ({
        method: 'POST',
        url: 'v1/auth/logout',
      }),
    }),
    newPassword: builder.mutation<void, { newPassword: string; recoveryCode: string }>({
      query: body => ({
        body,
        method: 'POST',
        url: `/v1/auth/new-password`,
      }),
    }),
    passwordRecovery: builder.mutation<void, { email: string }>({
      query: body => ({
        body,
        method: 'POST',
        url: '/v1/auth/password-recovery',
      }),
    }),
  }),
  reducerPath: 'inctagramApi',
})

export const {
  useGetUsersQuery,
  useLogoutMutation,
  useNewPasswordMutation,
  usePasswordRecoveryMutation,
} = inctagramApi
