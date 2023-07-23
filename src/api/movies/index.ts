import { CreateMovieType, MovieType } from "@/types"
import { apiDeleteCall, apiGetCall, apiPostCall, apiPutCall } from ".."

export const getMovies = async () => {
    const response = await apiGetCall('/api/Movies')
    return response.data
}

export const getMovieById = async (id: string) => {
    const response = await apiGetCall(`/api/Movies/Details/${id}`)
    return response.data
}

export const createMovie = async (data: CreateMovieType) => {
    const response = await apiPostCall('/api/Movies', data)
    return response.data
}

export const editMovie = async (data: MovieType) => {
    const response = await apiPutCall('/api/Movies', data)
    return response.data
}

export const deleteMovie = async (id: string) => {
    const response = await apiDeleteCall(`/api/Movies/${id}`)
    return response.data
}