type DateString = `${number}.${number}.${number}`
export type UserProfileRequest = {
  aboutMe: string
  city: string
  country: string
  dateOfBirthday: DateString
  firstName: string
  lastName: string
  userName: string
}

export type UserProfileResponse = {
  aboutMe: string
  city: string
  country: string
  createdAt: string
  dateOfBirthday: DateString
  firstName: string
  lastName: string
  originalAvatarUrl: string
  profileId: number
  smallAvatarUrl: string
  updatedAt: string
}

export type UploadAvatar = {
  photo: File
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
