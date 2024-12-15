import { z } from 'zod'

const PASSWORD_REQUIREMENTS_MESSAGE =
  'Password must contain 0-9, a-z, A-Z, and at least one of the following symbols: ! # $ % & ( ) * + , - . / : ; < = > ? @ [ \\ ] _` { | } ~'

const PASSWORD_SYMBOLS = '! # $ % & ( ) * + , - . / : ; < = > ? @ [ \\ ] _` { | } ~'

export const usernameSchema = z
  .string()
  .min(6, { message: 'Minimum number of characters 6' })
  .max(30, { message: 'Maximum number of characters 30' })
  .regex(/^[A-Za-z0-9_-]+$/, {
    message: 'Username must contain 0-9, a-z, A-Z, _ -',
  })

export const createUsernameSchema = (t: (key: string) => string) =>
  z
    .string()
    .min(6, { message: t('UsernameMin') })
    .max(30, { message: t('UsernameMax') })
    .regex(/^[A-Za-z0-9_-]+$/, {
      message: t('UsernameRegex'),
    })

export const createEmailSchema = (t: (key: string) => string) =>
  z.string().email({ message: t('EmailRegex') })

export const createPasswordSchema = (t: (key: string) => string) =>
  z
    .string()
    .min(6, { message: t('PasswordMin') })
    .max(20, { message: t('PasswordMax') })
    .refine(val => /[0-9]/.test(val), {
      message: t('PasswordRegex') + PASSWORD_SYMBOLS,
    })
    .refine(val => /[A-Z]/.test(val), {
      message: t('PasswordRegex') + PASSWORD_SYMBOLS,
    })
    .refine(val => /[a-z]/.test(val), {
      message: t('PasswordRegex') + PASSWORD_SYMBOLS,
    })
    .refine(val => /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/.test(val), {
      message: t('PasswordRegex') + PASSWORD_SYMBOLS,
    })

export const createAgreeSchema = (t: (key: string) => string) =>
  z.boolean().refine(val => val, {
    message: t('AgreeMessage'),
  })

export const createRecaptchaSchema = (t: (key: string) => string) =>
  z.string().min(1, { message: t('Recaptcha') })

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
