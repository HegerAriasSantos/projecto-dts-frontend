export type UserSigninResponse = {
  id: string;
  userName: string;
  email: string;
  roles: null | string[];
  isVerified: boolean;
  hasError: boolean;
  error: string;
  jwToken: null | string;
};
