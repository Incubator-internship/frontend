export type registrationArgs = {
  email: string
  password: string
  userName: string
}

export type registrationConfirmationArgs = {
  code: string
}

export type registrationResendingArgs = {
  email: string
}

export type User = {
  createdAt: string
  email: string
  id: string
  name: string
}
