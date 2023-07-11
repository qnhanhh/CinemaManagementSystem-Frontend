import { apiGetCall } from ".."

export const getMovies = async () => {
    const response = await apiGetCall('/api/Movies')
    return response.data
}