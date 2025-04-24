import { z } from 'zod'

const PASSWORD_REQUIREMENTS_MESSAGE =
  'Password must contain 0-9, a-z, A-Z, and at least one of the following symbols: ! # $ % & ( ) * + , - . / : ; < = > ? @ [ \\ ] _` { | } ~'

const PASSWORD_SYMBOLS = '! # $ % & ( ) * + , - . / : ; < = > ? @ [ \\ ] _` { | } ~'

const MIN_AGE_DATE = new Date()

MIN_AGE_DATE.setFullYear(MIN_AGE_DATE.getFullYear() - 13)

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
    .trim()
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

export const maximumCharactersSchema = z.object({
  description: z.string().max(500),
})

export type PostFormData = z.infer<typeof maximumCharactersSchema>

export const createFirstNameSchema = (t: (key: string) => string) =>
  z
    .string()
    .trim()
    .min(1, { message: t('FirstNameMin') })
    .max(50, { message: t('FirstNameMax') })
    .regex(/^[A-Za-zА-Яа-яЁё]+$/, {
      message: t('FirstNameRegex'),
    })
    .optional()
    .nullable()

export const createLastNameSchema = (t: (key: string) => string) =>
  z
    .string()
    .trim()
    .min(1, { message: t('LastNameMin') })
    .max(50, { message: t('LastNameMax') })
    .regex(/^[A-Za-zА-Яа-яЁё]+$/, {
      message: t('LastNameRegex'),
    })
    .optional()
    .nullable()

export const createAboutMeSchema = (t: (key: string) => string) =>
  z
    .string()
    .trim()
    .max(200, { message: t('AboutMeMax') })
    .regex(/^[A-Za-zА-Яа-яЁё0-9\s!@#$%^&*()_+\-=[\]{};:'"\\|,.<>/?`~]+$/, {
      message: t('AboutMeRegex'),
    })
    .optional()
    .nullable()

export const createDateOfBirthSchema = (t: (key: string) => string) =>
  z.coerce
    .date()
    .max(MIN_AGE_DATE, { message: t('AgeRestriction') })
    .transform(date => {
      const day = String(date.getDate()).padStart(2, '0')
      const month = String(date.getMonth() + 1).padStart(2, '0') // Январь = 0
      const year = date.getFullYear()

      return `${day}.${month}.${year}`
    })
