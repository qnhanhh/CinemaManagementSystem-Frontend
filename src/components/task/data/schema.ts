import { z } from "zod"

export const commonSchema = z.object({
    id: z.string(),
    title: z.string(),
    views: z.string(),
    compareStatus: z.string(),
})

export const movieSchema = commonSchema.extend({
    genres: z.string(),
})

export type MovieType = z.infer<typeof movieSchema>

export const userSchema = commonSchema.extend({
    active: z.boolean(),
})

export type UserType = z.infer<typeof userSchema>
