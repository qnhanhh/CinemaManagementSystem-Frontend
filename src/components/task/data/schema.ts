import { z } from "zod"

export const taskSchema = z.object({
    id: z.string(),
    title: z.string(),
    genres: z.string(),
    views: z.string(),
    compareStatus: z.string(),
})

export type Task = z.infer<typeof taskSchema>
