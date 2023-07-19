import { z } from "zod";

export const loginFormSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters long",
    }),
});

export const registerFormSchema = z.object({
    firstName: z.string(),
    middleName: z.string().optional(),
    lastName: z.string(),
    username: z.string(),
    email: z.string().email({
        message: "Please enter a valid email address",
    }),
    password: z.string().regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).+$/,
        'Password is not strong enough'
    ).min(6, 'Password must be at least 6 characters long'),
});

export const movieSchema = z.object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string(),
    imageUrl: z.string().startsWith('/'),
    backDropUrl: z.string().startsWith('/'),
    ageRequired: z.number().min(0).max(18),
    releaseDate: z.date().min(new Date(1900, 1, 1)).max(new Date()),
    status: z.string()
})

export const genreSchema = z.object({
    id: z.string(),
    name: z.string(),
})

export const rateSchema = z.object({
    rating: z.number().min(1).max(5),
    comment: z.string().max(300, {
        message: "Comment must be less than 300 characters long"
    }),
})

