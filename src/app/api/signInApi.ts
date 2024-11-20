import { inctagramApi } from '@/app/api/inctagramApi'

type GoodLoginAnswer = {
  accessToken: string
}

type BadLoginAnswer = {
  errorsMessages: [Error]
}

type Error = {
  field: string
  message: string
}

export type LoginData = {
  loginOrEmail: string
  password: string
}

const loginApi = inctagramApi.injectEndpoints({
  endpoints(builder) {
    return {
      login: builder.mutation<BadLoginAnswer | GoodLoginAnswer, LoginData>({
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
