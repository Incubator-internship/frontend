import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'
import { Mutex } from 'async-mutex'
import Router from 'next/router'

const mutex = new Mutex()

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://excubator.xyz/api',
  credentials: 'include',
  prepareHeaders: headers => {
    const token = localStorage.getItem('accessToken')

    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }

    return headers
  },
})

export const baseQueryWithReauth: BaseQueryFn<
  FetchArgs | string,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions)

  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()

      try {
        const refreshResult = (await baseQuery(
          { method: 'POST', url: '/v1/auth/refresh-token' },
          api,
          extraOptions
        )) as any

        if (refreshResult.data) {
          localStorage.setItem('accessToken', refreshResult.data.accessToken)
          result = await baseQuery(args, api, extraOptions)
        } else {
          Router.push('/signin')
        }
      } finally {
        release()
      }
    } else {
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }

  return result
}
