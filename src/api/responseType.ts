export interface GenericResponse {
    id: string
}

export interface MovieResponse extends GenericResponse {
    title: string
    description?: string
    imageUrl?: string
}


