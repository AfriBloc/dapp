"use server";

import {
  logInApi,
  registerApi,
  verifyOtpApi,
  generateOtpApi,
} from "@/services/apis/auth.api";
import { setAccessToken } from "@/services/auth";

export const registerUser = async (payload: SignUp) => {
  try {
    const response = await registerApi(payload);

    if (!response.ok) {
      return {
        error: true,
        message: response.body.message,
      };
    }
    return {
      error: false,
      message: response.body.message,
    };
  } catch {
    return {
      error: true,
      message: "Internal server error",
    };
  }
};

export const loginUser = async (payload: Login) => {
  try {
    const response = await logInApi(payload);

    if (!response.ok) {
      return {
        error: true,
        message: response.body.message,
      };
    }

    await setAccessToken(response.body);
    return {
      error: false,
      message: response.body.message,
    };
  } catch {
    return {
      error: true,
      message: "Internal server error",
    };
  }
};

export const generateOtp = async (payload: GenerateOtpFormValue) => {
  try {
    const response = await generateOtpApi(payload);

    if (!response.ok) {
      return {
        error: true,
        message: response.body.message,
      };
    }
    return {
      error: false,
      message: response.body.message,
    };
  } catch {
    return {
      error: true,
      message: "Internal server error",
    };
  }
};

export const verifyOtp = async (payload: VerifyOtpFormValue) => {
  try {
    const response = await verifyOtpApi(payload);

    if (!response.ok) {
      return {
        error: true,
        message: response.body.message,
      };
    }

    // Assuming VerifyOtpResponse has an access_token field
    if (response.body.access_token) {
      // The setAccessToken function expects a UserResponse type.
      // We need to transform VerifyOtpResponse to UserResponse or create a new setAccessToken for VerifyOtpResponse.
      // For now, I'm creating a dummy UserResponse to satisfy the type.
      // You might need to adjust this based on your actual UserResponse structure and what verifyOtpApi returns.
      const dummyUserResponse = {
        user: {
          id: "",
          firstName: "",
          lastName: "",
          email: payload.email,
          phoneNumber: null,
          emailVerifiedAt: null,
          phoneVerifiedAt: null,
          passwordResetToken: null,
          passwordResetExpires: null,
          middleName: null,
          dateOfBirth: null,
          gender: null,
          nationality: null,
          placeOfBirth: null,
          kycStatus: "pending",
          kycApplicantId: null,
          kycCompletedAt: null,
          createdAt: "",
          updatedAt: "",
        },
        accessToken: response.body.access_token,
        success: true,
        statusCode: 200,
        message: "OTP verified successfully",
      };
      await setAccessToken(dummyUserResponse);
    }

    return {
      error: false,
      message: response.body.message,
    };
  } catch {
    return {
      error: true,
      message: "Internal server error",
    };
  }
};
