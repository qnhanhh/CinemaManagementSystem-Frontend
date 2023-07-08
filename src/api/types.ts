export interface GenericResponse {
    id: string
    isSuccess: boolean
    message: string
    errors: string[]
}

export interface MovieResponse extends GenericResponse {
    title: string
    description?: string
    imageUrl?: string
}
