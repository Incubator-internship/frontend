import {
  registrationArgs,
  registrationConfirmationArgs,
  registrationResendingArgs,
} from '@/app/api/inctagramApi.types'
import { baseQueryWithReauth } from '@/app/api/inctagramBaseQuery'
import { createApi } from '@reduxjs/toolkit/query/react'

export const inctagramApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => '/v1/users',
    }),

    passwordRecovery: builder.mutation<void, { email: string }>({
      query: body => ({
        body,
        method: 'POST',
        url: '/v1/auth/password-recovery',
      }),
    }),
    registration: builder.mutation<void, registrationArgs>({
      query: args => ({
        body: args,
        method: 'POST',
        url: `/v1/auth/registration`,
      }),
    }),
    registrationConfirmation: builder.mutation<void, registrationConfirmationArgs>({
      query: args => ({
        body: args,
        method: 'POST',
        url: `/v1/auth/registration-confirmation`,
      }),
    }),
    registrationResending: builder.mutation<void, registrationResendingArgs>({
      query: args => ({
        body: args,
        method: 'POST',
        url: `/v1/auth/registration-email-resending`,
      }),
    }),
  }),
  reducerPath: 'inctagramApi',
})

export const {
  useGetUsersQuery,
  usePasswordRecoveryMutation,
  useRegistrationConfirmationMutation,
  useRegistrationMutation,
  useRegistrationResendingMutation,
} = inctagramApi
