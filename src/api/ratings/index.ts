import { EditRateType, MovieType, RateType } from "@/types"
import { apiDeleteCall, apiGetCall, apiPostCall, apiPutCall } from ".."

export const getRates = async () => {
    const response = await apiGetCall('/api/Rates')
    return response.data
}

export const getRateById = async (id: string) => {
    const response = await apiGetCall(`/api/Rates/${id}`)
    return response.data
}

export const createRate = async (data: RateType) => {
    const response = await apiPostCall('/api/Rates', data)
    return response.data
}

export const editRate = async (data: EditRateType) => {
    const response = await apiPutCall('/api/Rates', data)
    return response.data
}

export const deleteRate = async (id: string) => {
    const response = await apiDeleteCall(`/api/Rates/${id}`)
    return response.data
}