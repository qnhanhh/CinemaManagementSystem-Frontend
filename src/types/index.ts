import { z } from "zod";
import { movieSchema, loginFormSchema, registerFormSchema, genreSchema, rateSchema, actorSchema, companySchema, userSchema, editRateSchema, createActorSchema, createCompanySchema, createGenreSchema, createMovieSchema, addToFavUserSchema, editUserSchema, createRateSchema, genreMovieSchema } from "./schema";

export type LoginRequest = z.infer<typeof loginFormSchema>

export type RegisterRequest = z.infer<typeof registerFormSchema>

export type MovieType = z.infer<typeof movieSchema>

export type CreateMovieType = z.infer<typeof createMovieSchema>

export type GenreType = z.infer<typeof genreSchema>

export type GenreMovieType = z.infer<typeof genreMovieSchema>

export type CreateGenreType = z.infer<typeof createGenreSchema>

export type RateType = z.infer<typeof rateSchema>

export type CreateRateType = z.infer<typeof createRateSchema>

export type EditRateType = z.infer<typeof editRateSchema>

export type ActorType = z.infer<typeof actorSchema>

export type CreateActorType = z.infer<typeof createActorSchema>

export type CompanyType = z.infer<typeof companySchema>

export type CreateCompanyType = z.infer<typeof createCompanySchema>

export type UserType = z.infer<typeof userSchema>

export type EditUserType = z.infer<typeof editUserSchema>

export type AddToFavUserType = z.infer<typeof addToFavUserSchema>
