import { User } from "./User.model";

export interface ResponseDTO<T> {
  isSuccess: boolean;
  statusCode: number;
  message: string;
  result: T;
}

export interface LoginResponse {
  user: User; // Defina corretamente se você tiver um modelo para o usuário
  token: string;
}