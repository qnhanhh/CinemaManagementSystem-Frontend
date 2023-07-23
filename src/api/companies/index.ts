import { CompanyType, CreateCompanyType } from "@/types"
import { apiDeleteCall, apiGetCall, apiPostCall, apiPutCall } from ".."

export const getCompanies = async () => {
    const response = await apiGetCall('/api/Companies')
    return response.data
}

export const getCompanyById = async (id: string) => {
    const response = await apiGetCall(`/api/Companies/${id}`)
    return response.data
}

export const createCompany = async (data: CreateCompanyType) => {
    const response = await apiPostCall('/api/Companies', data)
    return response.data
}

export const editCompany = async (data: CompanyType) => {
    const response = await apiPutCall('/api/Companies', data)
    return response.data
}

export const deleteCompany = async (id: string) => {
    const response = await apiDeleteCall(`/api/Companies/${id}`)
    return response.data
}