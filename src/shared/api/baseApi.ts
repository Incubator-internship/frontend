import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const inctagramApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://excubator.xyz/api/v1/' }),
  endpoints: builder => ({}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {} = inctagramApi
