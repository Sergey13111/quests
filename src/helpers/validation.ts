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
