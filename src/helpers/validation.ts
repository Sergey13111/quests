import { z } from 'zod';

export const schemaOrderQuest = z.object({
  name: z.string().min(1, { message: 'Имя обязательно' }),
  phone: z
    .string()
    .min(1, { message: 'Поле обязательное для заполнения' })
    .regex(/^\d{10}$/, { message: 'Введите корректный номер телефона из 7 цифр' }),
  peopleCount: z.coerce
    .number()
    .gte(1, { message: 'Количество участников должно быть не меньше 1' })
    .lte(10, { message: 'Максимальное количество участников 10' }),
  isLegal: z.boolean().refine((val) => val === true, {
    message: 'Необходимо согласие с правилами',
  }),
});

export type FormData = z.infer<typeof schemaOrderQuest>;

export const schemaValidationSignUp = z.object({
  name: z.string().min(1, { message: 'Поле обязательно' }),
  email: z
    .string()
    .min(1, { message: 'Поле обязательно' })
    .email({ message: 'Некорректный email' }),
  password: z
    .string()
    .min(8, { message: 'Пароль должен содержать минимум 8 символов' })
    .regex(/[a-zA-Z]/, { message: 'Пароль должен содержать хотя бы одну латинскую букву' })
    .regex(/[0-9]/, { message: 'Пароль должен содержать хотя бы одну цифру' }),
});

export type FormSignUpType = z.infer<typeof schemaValidationSignUp>;

export const schemaValidationSignIn = z.object({
  email: z
    .string()
    .min(1, { message: 'Поле обязательно' })
    .email({ message: 'Некорректный email' }),
  password: z
    .string()
    .min(8, { message: 'Пароль должен содержать минимум 8 символов' })
    .regex(/[a-zA-Z]/, { message: 'Пароль должен содержать хотя бы одну латинскую букву' })
    .regex(/[0-9]/, { message: 'Пароль должен содержать хотя бы одну цифру' }),
});

export type FormSignInType = z.infer<typeof schemaValidationSignIn>;
