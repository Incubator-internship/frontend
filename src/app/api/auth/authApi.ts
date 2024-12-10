import {
  LoginAnswer,
  LoginData,
  MeData,
  NewPasswordArgs,
  PasswordRecoveryArgs,
  registrationArgs,
  registrationConfirmationArgs,
  registrationResendingArgs,
} from '@/app/api/auth/authApi.types'
import { inctagramApi } from '@/app/api/inctagramApi'

const authApi = inctagramApi.injectEndpoints({
  endpoints: builder => ({
    getMe: builder.query<MeData, void>({
      query: () => '/v1/auth/me',
    }),
    login: builder.mutation<LoginAnswer, LoginData>({
      query: loginInfo => ({
        body: loginInfo,
        method: 'POST',
        url: '/v1/auth/login',
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        method: 'POST',
        url: 'v1/auth/logout',
      }),
    }),
    newPassword: builder.mutation<void, NewPasswordArgs>({
      query: body => ({
        body,
        method: 'POST',
        url: `/v1/auth/new-password`,
      }),
    }),
    passwordRecovery: builder.mutation<void, PasswordRecoveryArgs>({
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
})

export const {
  useGetMeQuery,
  useLoginMutation,
  useLogoutMutation,
  useNewPasswordMutation,
  usePasswordRecoveryMutation,
  useRegistrationConfirmationMutation,
  useRegistrationMutation,
  useRegistrationResendingMutation,
} = authApi
