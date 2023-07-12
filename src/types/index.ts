import { z } from "zod";
import { movieSchema, loginFormSchema, registerFormSchema } from "./schema";

export type LoginRequest = z.infer<typeof loginFormSchema>

export type RegisterRequest = z.infer<typeof registerFormSchema>

export type MovieType = z.infer<typeof movieSchema>