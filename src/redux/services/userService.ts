import { config } from "@/config";
import {
  UserSigninRequest,
  UserSigninResponse,
  UserSignupRequest,
  UserSignupResponse,
} from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userService = createApi({
  reducerPath: "userService",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: `${config.backendEndpoint}/Account`,
  }),
  endpoints: (builder) => ({
    signup: builder.mutation<UserSignupResponse, UserSignupRequest>({
      query(user) {
        return {
          url: `register-basic`,
          method: "PUT",
          body: { user },
        };
      },
    }),
    signin: builder.mutation<UserSigninRequest, UserSigninResponse>({
      query(user) {
        return {
          url: `authenticate`,
          method: "POST",
          body: { user },
        };
      },
    }),
  }),
});

export const { useSigninMutation, useSignupMutation } = userService;
