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

export type LoginAnswer = {
  accessToken: string
}

export type LoginData = {
  loginOrEmail: string
  password: string
}

export type NewPasswordArgs = {
  newPassword: string
  recoveryCode: string
}

export type PasswordRecoveryArgs = {
  email: string
}
