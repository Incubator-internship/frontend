import { inctagramApi } from './baseApi'

const authApi = inctagramApi.injectEndpoints({
  endpoints: build => ({
    login: build.mutation<any, any>({
      query({ loginOrEmail, password }) {
        return {
          body: { loginOrEmail, password },
          method: 'POST',
          url: `auth/login`,
        }
      },
    }),
  }),
})

export const { useLoginMutation } = authApi
