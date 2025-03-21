import { inctagramApi } from '../inctagramApi'
import { DeleteUser, UploadAvatar, UserProfileRequest, UserProfileResponse } from './usersApi.types'

export const usersApi = inctagramApi.injectEndpoints({
  endpoints: builder => ({
    deleteAvatar: builder.mutation<void, DeleteUser>({
      invalidatesTags: ['UserProfile'],
      query: ({ id }) => ({
        method: 'DELETE',
        url: `/v1/users/avatar/${id}`,
      }),
    }),
    editProfile: builder.mutation<void, { body: UserProfileRequest; id: number }>({
      invalidatesTags: ['UserProfile'],
      query: ({ body, id }) => ({
        body,
        method: 'PUT',
        url: `/v1/users/profile/${id}`,
      }),
    }),
    getProfile: builder.query<UserProfileResponse, number>({
      providesTags: ['UserPosts'],
      query: id => `/v1/users/profile/${id}`,
    }),
    uploadAvatar: builder.mutation<void, UploadAvatar>({
      invalidatesTags: ['UserProfile'],
      query: ({ photo }) => {
        const formData = new FormData()

        formData.append('photo', photo)

        return {
          body: formData,
          method: 'POST',
          url: '/v1/users/avatar',
        }
      },
    }),
  }),
})

export const {
  useDeleteAvatarMutation,
  useEditProfileMutation,
  useGetProfileQuery,
  useUploadAvatarMutation,
} = usersApi
