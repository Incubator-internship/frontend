import { z } from 'zod'

const PASSWORD_REQUIREMENTS_MESSAGE =
  'Password must contain 0-9, a-z, A-Z, and at least one of the following symbols: ! # $ % & ( ) * + , - . / : ; < = > ? @ [ \\ ] _` { | } ~'

export const usernameSchema = z
  .string()
  .min(6, { message: 'Minimum number of characters 6' })
  .max(30, { message: 'Maximum number of characters 30' })
  .regex(/^[A-Za-z0-9_-]+$/, {
    message: 'Username must contain 0-9, a-z, A-Z, _ -',
  })

export const emailSchema = z
  .string()
  .email({ message: 'The email must match the format example@example.com' })

export const passwordSchema = z
  .string()
  .min(6, { message: 'Minimum number of characters 6' })
  .max(20, { message: 'Maximum number of characters 20' })
  .refine(val => /[0-9]/.test(val), {
    message: PASSWORD_REQUIREMENTS_MESSAGE,
  })
  .refine(val => /[A-Z]/.test(val), {
    message: PASSWORD_REQUIREMENTS_MESSAGE,
  })
  .refine(val => /[a-z]/.test(val), {
    message: PASSWORD_REQUIREMENTS_MESSAGE,
  })
  .refine(val => /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/.test(val), {
    message: PASSWORD_REQUIREMENTS_MESSAGE,
  })

export const agreeSchema = z.boolean().refine(val => val, {
  message: 'You must agree to the terms',
})

export const passwordLengthSchema = z
  .string()
  .min(6, { message: 'Invalid password' })
  .max(20, { message: 'Invalid password' })
