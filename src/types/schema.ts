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
    id: z.string(),
    title: z.string().min(1, {
        message: "Movie title is required"
    }),
    description: z.string().min(1, {
        message: "Movie description is required"
    }),
    trailerUrl: z.string().startsWith('/'),
    imageUrl: z.string().startsWith('/'),
    backDropUrl: z.string().startsWith('/'),
    ageRequired: z.number().min(0, {
        message: "Age required is required"
    }),
    releaseDate: z.date().min(new Date(1900, 1, 1)),
    status: z.string().min(1, {
        message: "Movie status is required"
    }),
    avgRate: z.number().min(0),
    companyNames: z.array(z.string()),
})

export const editMovieSchema = z.object({
    id: z.string(),
    title: z.string().min(1, {
        message: "Movie title is required"
    }),
    description: z.string().min(1, {
        message: "Movie description is required"
    }),
    trailerUrl: z.string().startsWith('/'),
    imageUrl: z.string().startsWith('/'),
    backDropUrl: z.string().startsWith('/'),
    ageRequired: z.number().min(0, {
        message: "Age required is required"
    }),
    releaseDate: z.date().min(new Date(1900, 1, 1)),
    status: z.string().min(1, {
        message: "Movie status is required"
    }),
})

export const createMovieSchema = z.object({
    title: z.string().min(1, {
        message: "Movie title is required"
    }),
    description: z.string().min(1, {
        message: "Movie description is required"
    }),
    trailerUrl: z.string().startsWith('/'),
    imageUrl: z.string().startsWith('/'),
    backDropUrl: z.string().startsWith('/'),
    ageRequired: z.number().min(0, {
        message: "Age required is required"
    }),
    releaseDate: z.date().min(new Date(1900, 1, 1)),
    status: z.string().min(1, {
        message: "Movie status is required"
    })
})

export const genreSchema = z.object({
    id: z.string(),
    name: z.string(),
})

export const genreMovieSchema = z.object({
    id: z.string(),
    name: z.string(),
    movies: z.array(movieSchema)
})

export const createGenreSchema = z.object({
    name: z.string(),
})

export const rateSchema = z.object({
    id: z.string(),
    userId: z.string(),
    movieId: z.string(),
    rating: z.number().min(1).max(5),
    comment: z.string().min(1).max(300, {
        message: "Comment should not be empty and it must be less than 300 characters long"
    }),
})

export const createRateSchema = z.object({
    userId: z.string(),
    movieId: z.string(),
    rating: z.number().min(1).max(5),
    comment: z.string().min(1).max(300, {
        message: "Comment should not be empty and it must be less than 300 characters long"
    }),
})

export const editRateSchema = z.object({
    id: z.string(),
    rating: z.number().min(1).max(5),
    comment: z.string().min(1).max(300, {
        message: "Comment should not be empty and it must be less than 300 characters long"
    }),
})

export const actorSchema = z.object({
    name: z.string(),
    description: z.string(),
    imageUrl: z.string().startsWith('/'),
    birthDate: z.date().min(new Date(1900, 1, 1)).max(new Date()),
    gender: z.string(),
    id: z.string(),
})

export const createActorSchema = z.object({
    name: z.string(),
    description: z.string(),
    birthDate: z.date().min(new Date(1900, 1, 1)).max(new Date()),
    gender: z.string(),
})

export const companySchema = z.object({
    name: z.string(),
    description: z.string(),
    imageUrl: z.string().startsWith('/'),
    id: z.string(),
})

export const createCompanySchema = z.object({
    name: z.string(),
    description: z.string(),
})

export const userSchema = z.object({
    firstname: z.string().min(1, {
        message: "First name is required"
    }),
    middleName: z.string().optional(),
    lastname: z.string().min(1, {
        message: "Last name is required"
    }),
    companyId: z.string().optional(),
    birthDate: z.date().min(new Date(1900, 1, 1)).max(new Date()).optional(),
    id: z.string(),
});

export const editUserSchema = z.object({
    firstname: z.string().min(1, {
        message: "First name is required"
    }),
    middleName: z.string().optional(),
    lastname: z.string().min(1, {
        message: "Last name is required"
    }),
    companyId: z.string().optional(),
    birthDate: z.date().min(new Date(1900, 1, 1)).max(new Date()).optional(),
});

export const addToFavUserSchema = z.object({
    movieId: z.string(),
    userId: z.string()
})