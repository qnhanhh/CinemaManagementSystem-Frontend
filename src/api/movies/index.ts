import { CreateMovieType, EditMovieType, MovieType } from "@/types"
import { apiDeleteCall, apiGetCall, apiPostCall, apiPutCall } from ".."

export const getMovies = async () => {
    const response = await apiGetCall('/api/Movies')
    return response.data
}

export const getMovieById = async (id: string) => {
    const response = await apiGetCall(`/api/Movies/Details/${id}`)
    return response.data
}

export const getMovieByGenre = async (id: string) => {
    const response = await apiGetCall(`/api/Movies/ByGenre/${id}`)
    return response.data
}

export const getMovieByCompany = async (id: string) => {
    const response = await apiGetCall(`/api/Movies/ByCompany/${id}`)
    return response.data
}

export const searchMovie = async (data: string) => {
    const response = await apiGetCall(`/api/Movies/Search/${data}`)
    return response.data
}

export const createMovie = async (data: CreateMovieType) => {
    const response = await apiPostCall('/api/Movies', data)
    return response.data
}

export const editMovie = async (data: EditMovieType) => {
    const response = await apiPutCall('/api/Movies', data)
    return response.data
}

export const deleteMovie = async (id: string) => {
    const response = await apiDeleteCall(`/api/Movies/${id}`)
    return response.data
}