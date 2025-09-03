export type UserProfileRequest = {
  aboutMe: string
  city: string
  country: string
  dateOfBirthday: string
  firstName: string
  lastName: string
  userName: string
}

export type UserProfileResponse = {
  aboutMe: string
  city: string
  country: string
  createdAt: string
  dateOfBirthday: string
  firstName: string
  lastName: string
  originalAvatarUrl: string
  profileId: number
  smallAvatarUrl: string
  updatedAt: string
}

export type UploadAvatar = {
  avatar: File
}
export type DeleteUser = {
  id: number
}

export type ErrorMessageUser = {
  errorsMessages: ErrorData[]
}

export type ErrorData = {
  field: string
  message: string
}
