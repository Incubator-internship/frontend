import { inctagramApi } from '@/app/api/inctagramApi'

type LoginAnswer = {
  accessToken: string
}

export type LoginData = {
  loginOrEmail: string
  password: string
}

const loginApi = inctagramApi.injectEndpoints({
  endpoints(builder) {
    return {
      login: builder.mutation<LoginAnswer, LoginData>({
        query: loginInfo => ({
          body: loginInfo,
          method: 'POST',
          url: '/v1/auth/login',
        }),
      }),
    }
  },
})

export const { useLoginMutation } = loginApi
