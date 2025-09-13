import { post } from "./api";

export const registerApi = async (body: SignUp) => {
  return post<SignUp, UserResponse>("/auth/register", body, true);
};

export const generateOtpApi = async (body: GenerateOtpFormValue) => {
  return post<GenerateOtpFormValue, ApiResponse>("/auth/generate-otp", body);
};

export const verifyOtpApi = async (body: VerifyOtpFormValue) => {
  return post<VerifyOtpFormValue, VerifyOtpResponse>("/auth/verify-otp", body);
};

export const logInApi = async (body: Login) => {
  return post<Login, UserResponse>("/auth/login/admin", body);
};
