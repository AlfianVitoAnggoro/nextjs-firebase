import { z } from 'zod';

export const userFormSchema = z.object({
  image: z.any(),
  name: z
    .string({ required_error: 'Name is required' })
    .min(3, { message: 'Name must be at least 3 characters' }),
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Email is invalid' }),
  role: z.string({ required_error: 'Role is required' }),
  password: z
    .string({ required_error: 'Password is required' })
    .min(6, { message: 'Password must be at least 6 characters' })
    .max(10, { message: 'Password must be less than 10 characters' }),
});
