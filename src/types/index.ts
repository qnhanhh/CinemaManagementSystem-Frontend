import { loginFormSchema, registerFormSchema } from "./schema";

export type LoginRequest = typeof loginFormSchema

export type RegisterRequest = typeof registerFormSchema