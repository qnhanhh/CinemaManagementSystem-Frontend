import { CreateGenreType, GenreType } from "@/types"
import { apiDeleteCall, apiGetCall, apiPostCall, apiPutCall } from ".."

export const getGenres = async () => {
    const response = await apiGetCall('/api/Genres')
    return response.data
}

export const getGenreById = async (id: string) => {
    const response = await apiGetCall(`/api/Genres/${id}`)
    return response.data
}

export const createGenre = async (data: CreateGenreType) => {
    const response = await apiPostCall('/api/Genres', data)
    return response.data
}

export const editGenre = async (data: GenreType) => {
    const response = await apiPutCall('/api/Genres', data)
    return response.data
}

export const deleteRate = async (id: string) => {
    const response = await apiDeleteCall(`/api/Genres/${id}`)
    return response.data
}
