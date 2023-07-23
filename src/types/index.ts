import { z } from "zod";
import { movieSchema, loginFormSchema, registerFormSchema, genreSchema, rateSchema, actorSchema, companySchema, userSchema, editRateSchema } from "./schema";

export type LoginRequest = z.infer<typeof loginFormSchema>

export type RegisterRequest = z.infer<typeof registerFormSchema>

export type MovieType = z.infer<typeof movieSchema>

export type GenreType = z.infer<typeof genreSchema>

export type RateType = z.infer<typeof rateSchema>

export type EditRateType = z.infer<typeof editRateSchema>

export type ActorType = z.infer<typeof actorSchema>

export type CompanyType = z.infer<typeof companySchema>

export type UserType = z.infer<typeof userSchema>
