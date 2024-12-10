import { User } from "./User.model";

export interface LoginResponse {
    user: User;
    token: string;
  }