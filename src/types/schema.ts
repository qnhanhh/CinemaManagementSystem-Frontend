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
    firstName: z.string().min(1, {
        message: "First name is required"
    }),
    middleName: z.string().optional(),
    lastName: z.string().min(1, {
        message: "Last name is required"
    }),
    username: z.string().min(1, {
        message: "Username is required"
    }),
    email: z.string().email({
        message: "Please enter a valid email address",
    }),
    password: z.string().regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).+$/,
        'Password is not strong enough'
    ).min(6, 'Password must be at least 6 characters long'),
});

export const movieSchema = z.object({
    id: z.string().optional(),
    title: z.string().min(1, {
        message: "Movie title is required"
    }),
    description: z.string().min(1, {
        message: "Movie description is required"
    }),
    imageUrl: z.string().startsWith('/').optional(),
    backDropUrl: z.string().startsWith('/').optional(),
    ageRequired: z.number().min(0, {
        message: "Age required is required"
    }),
    releaseDate: z.date().min(new Date(1900, 1, 1)).max(new Date()),
    status: z.string().min(1, {
        message: "Movie status is required"
    })
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

