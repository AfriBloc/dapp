type SignUp = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
};

type Login = {
  identifier: string;
  password: string;
};

type GenerateOtpFormValue = {
  email: string;
};

type VerifyOtpFormValue = {
  email: string;
  otp: number;
};

type VerifyOtpResponse = ApiResponse & {
  access_token: string;
};

type ApiResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  error?: string;
};

type UserData = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string | null;
  emailVerifiedAt: string | null;
  phoneVerifiedAt: string | null;
  passwordResetToken: string | null;
  passwordResetExpires: string | null;
  middleName: string | null;
  dateOfBirth: string | null;
  gender: string | null;
  nationality: string | null;
  placeOfBirth: string | null;
  kycStatus: string;
  kycApplicantId: string | null;
  kycCompletedAt: string | null;
  createdAt: string;
  updatedAt: string;
};

type UserResponse = ApiResponse & {
  user: UserData;
  accessToken: string;
};

type EncryptData = {
  userData: UserResponse;
  expires: Date;
};
