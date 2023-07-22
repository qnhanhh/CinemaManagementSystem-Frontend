import { UserType } from "@/types";
import { apiGetCallProtected, apiPutCall } from "..";

export const getUsers = async () => {
  const response = await apiGetCallProtected("/api/Users");
  return response.data;
};

export const getUserById = async (id: string) => {
  const response = await apiGetCallProtected(`/api/Users/${id}`);
  return response.data;
};

export const editUser = async (data: UserType) => {
  const response = await apiPutCall('/api/Users', data)
  return response.data
}