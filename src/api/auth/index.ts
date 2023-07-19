import { LoginRequest, RegisterRequest } from "@/types"
import { apiPostCall } from ".."
import { z } from "zod"

export const loginUser = async (data: LoginRequest) => {
    const response = await apiPostCall('/api/Account/Login', data)
    return response.data
}

export const registerUser = async (data: RegisterRequest) => {
    const response = await apiPostCall('/api/Account/Register', data)
    return response.data
}