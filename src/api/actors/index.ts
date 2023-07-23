import { ActorType, CreateActorType, EditRateType, MovieType, RateType } from "@/types"
import { apiDeleteCall, apiGetCall, apiPostCall, apiPutCall } from ".."

export const getActors = async () => {
    const response = await apiGetCall('/api/Actors')
    return response.data
}

export const getActorById = async (id: string) => {
    const response = await apiGetCall(`/api/Actors/${id}`)
    return response.data
}

export const createActor = async (data: CreateActorType) => {
    const response = await apiPostCall('/api/Actors', data)
    return response.data
}

export const editActor = async (data: ActorType) => {
    const response = await apiPutCall('/api/Actors', data)
    return response.data
}

export const deleteActor = async (id: string) => {
    const response = await apiDeleteCall(`/api/Actors/${id}`)
    return response.data
}