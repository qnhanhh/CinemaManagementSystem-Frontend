import { apiGetCall } from ".."

export const getMovies = async () => {
    const response = await apiGetCall('/api/Movies')
    return response.data
}

export const getMovieById = async (id: string) => {
    const response = await apiGetCall(`/api/Movies/${id}`)
    return response.data
}