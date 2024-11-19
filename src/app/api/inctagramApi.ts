import { registrationArgs } from '@/app/api/inctagramApi.types'
import { baseQueryWithReauth } from '@/app/api/inctagramBaseQuery'
import { createApi } from '@reduxjs/toolkit/query/react'

export const inctagramApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({
    getUsers: builder.query({
      query: name => `v1/users`,
    }),
    registration: builder.mutation<void, registrationArgs>({
      query: args => ({
        body: args,
        method: 'POST',
        url: `/v1/auth/registration`,
      }),
    }),
  }),
  reducerPath: 'inctagramApi',
})

export const { useGetUsersQuery, useRegistrationMutation } = inctagramApi
