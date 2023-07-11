import { z } from "zod";

export const loginFormSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address",
    }),
    password: z.string().min(2, {
        message: "Password must be at least 2 characters long",
    }),
});

export const registerFormSchema = z.object({
    firstName: z.string(),
    middleName:z.string().optional(),
    lastName: z.string(),
    username: z.string(),
    email: z.string().email({
        message: "Please enter a valid email address",
    }),
    password: z.string().min(2, {
        message: "Password must be at least 2 characters long",
    }),
});
