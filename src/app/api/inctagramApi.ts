import { baseQueryWithReauth } from '@/app/api/inctagramBaseQuery'
import { createApi } from '@reduxjs/toolkit/query/react'

export const inctagramApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => '/v1/users',
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
    logout: builder.mutation<void, void>({
      query: () => ({
        method: 'POST',
        url: 'v1/auth/logout',
      }),
    }),
  }),
  reducerPath: 'inctagramApi',
})

<<<<<<< HEAD
export const { useGetUsersQuery, useLogoutMutation } = inctagramApi
=======
export const { useGetUsersQuery, useNewPasswordMutation, usePasswordRecoveryMutation } =
  inctagramApi
>>>>>>> 5ec0e52e64ce914d5cba09f71fd39b24dec899ed
