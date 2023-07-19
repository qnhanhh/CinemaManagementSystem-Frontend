import { z } from "zod";
import { movieSchema, loginFormSchema, registerFormSchema, genreSchema, rateSchema } from "./schema";

export type LoginRequest = z.infer<typeof loginFormSchema>

export type RegisterRequest = z.infer<typeof registerFormSchema>

export type MovieType = z.infer<typeof movieSchema>

export type GenreType = z.infer<typeof genreSchema>

export type RateType = z.infer<typeof rateSchema>
