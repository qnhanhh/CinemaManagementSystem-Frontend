import { apiGetCall } from ".."

export const getGenres = async () => {
    const response = await apiGetCall('/api/Genres')
    return response.data
}
