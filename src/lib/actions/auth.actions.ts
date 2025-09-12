"use server";
import {
  sendOTPApi,
  signinApi,
  signupApi,
  verifyEmailApi,
} from "@/services/apis/auth.api";
import { logout, setCookie } from "@/services/session";
import {
  ActionFormStatus,
  Login,
  SendOTP,
  SignUp,
  VerifyOTP,
} from "@/types/auth";

export const signupAction = async (body: SignUp) => {
  try {
    const rsp = await signupApi(body);

    if (!rsp.ok) {
      return {
        error: true,
        message: rsp?.body?.message || "Something went wrong",
      };
    }

    const { access_token, user } = rsp?.body;
    await setCookie({ access_token, user });

    return {
      error: false,
      message: rsp?.body?.message || "Account created successfully",
    };
  } catch (error) {
    console.log(error);

    return {
      error: true,
      message: "Something went wrong",
    };
  }
};

export const signInAction = async (body: Login) => {
  console.log("login-body>>>", body);
  try {
    const rsp = await signinApi(body);

    console.log("login>>>", rsp);

    if (!rsp.ok) {
      return {
        error: true,
        message: rsp?.body?.message || "Something went wrong",
      };
    }

    const { access_token, user } = rsp?.body;
    await setCookie({ access_token, user });

    return {
      error: false,
      message: rsp?.body?.message || "User logged in successfully",
      data: rsp?.body,
    };
  } catch (error) {
    console.log(error);

    return {
      error: true,
      message: "Something went wrong",
    };
  }
};

export const sendOTPAction = async (body: SendOTP) => {
  try {
    const rsp = await sendOTPApi(body);

    if (!rsp.ok) {
      return {
        error: true,
        message: rsp?.body?.message || "Something went wrong",
      };
    }

    return {
      error: false,
      message: rsp?.body?.message,
    };
  } catch (error) {
    console.log(error);

    return {
      error: true,
      message: "Something went wrong",
    };
  }
};

export const verifyEmailAction = async (body: VerifyOTP) => {
  try {
    const rsp = await verifyEmailApi(body);

    if (!rsp.ok) {
      return {
        error: true,
        message: rsp?.body?.message || "Something went wrong",
      };
    }

    await setCookie({ access_token: rsp?.body?.access_token });

    return {
      error: false,
      message: rsp?.body?.message || "Email verified successfully",
    };
  } catch (error) {
    console.log(error);

    return {
      error: true,
      message: "Something went wrong",
    };
  }
};

export const logoutAction = async () => {
  await logout();
};
