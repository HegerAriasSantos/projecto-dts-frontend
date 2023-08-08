import {
  UserSigninRequest,
  UserSigninResponse,
  UserSignupResponse,
} from "@/types";
import { BaseService } from "./baseService";

export class UserService extends BaseService {
  static url = `Account`;
  static async signin(user: UserSigninRequest) {
    const response = await this.create<UserSigninRequest, UserSigninResponse>(
      `${this.url}/authenticate`,
      user
    );
    return response.data;
  }

  static async signup(user: FormData) {
    const response = await this.create<FormData, UserSignupResponse>(
      `${this.url}/register-basic`,
      user,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    return response.data;
  }
}
