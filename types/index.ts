import { UserSignUpSchema } from '@/lib/validator'
import * as z from 'zod'

export type IUserSignUp = z.infer<typeof UserSignUpSchema>
