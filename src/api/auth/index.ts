import { axiosApi } from ".."
import { LoginRequest } from "../requestType"

export const loginUser = async (data: LoginRequest) => {
    const response = await axiosApi.post<LoginRequest>('/api/Account/Login', data)
    return response.data
}