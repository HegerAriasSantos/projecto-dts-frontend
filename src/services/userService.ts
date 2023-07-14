import { UserSigninRequest, UserSigninResponse, UserSignupRequest, UserSignupResponse } from "@/types";
import { axiosInstance } from "./baseService";

export class UserService {
  static url = `Account`
  static async signin(user: UserSigninRequest) {
    const response = await axiosInstance.post<UserSigninResponse>(`${this.url}/authenticate`, user)
    return response.data
  }

  static async signup(user: UserSignupRequest) {
    const response = await axiosInstance.post<UserSignupResponse>(`${this.url}/register-basic`, user)
    return response.data
  }
}