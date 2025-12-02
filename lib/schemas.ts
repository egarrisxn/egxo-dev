import { z } from 'zod'

export const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters' })
    .max(100),
  email: z.email({ message: 'Please enter a valid email address' }),
  message: z.string().min(10, { message: 'Message is too short' }).max(500),
})

export type FormData = z.infer<typeof formSchema>
