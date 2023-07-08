import { axiosApi } from ".."
import { MovieResponse } from "../responseType"

export const getMovies = async () => {
    const response = await axiosApi.get<MovieResponse[]>('/api/Movies')
    return response.data
}