import {
  AddToFavUserType,
  CreateMovieType,
  MovieType,
  UserType,
} from "@/types";
import { apiDeleteCall, apiGetCall, apiPostCall, apiPutCall } from "..";

export const getUsers = async () => {
  const response = await apiGetCall("/api/Users");
  return response.data;
};

export const getUserById = async (id: string) => {
  const response = await apiGetCall(`/api/Users/${id}`);
  return response.data;
};

export const editUser = async (data: UserType) => {
  const response = await apiPutCall("/api/Users", data);
  return response.data;
};

export const addToUserFavorite = async (data: AddToFavUserType) => {
  const response = await apiPostCall("/api/Users/AddToFavorites", data);
  return response.data;
};
