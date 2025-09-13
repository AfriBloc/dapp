"use server";

import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";

const ACCESS_TOKEN_KEY = "accessToken";
const SECRET_KEY = new TextEncoder().encode(
  process.env.NEXT_PUBLIC_SECRET_KEY as string,
);
const EXPIRY_TIME = 7200; // 2 hours

// Function to encrypt data
const encrypt = async (payload: EncryptData): Promise<string> => {
  try {
    const token = await new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime(`${EXPIRY_TIME} seconds`)
      .sign(SECRET_KEY);
    return token;
  } catch (error) {
    throw error;
  }
};

// Function to decrypt data
const decrypt = async (input: string): Promise<EncryptData | null> => {
  try {
    const { payload } = await jwtVerify(input, SECRET_KEY, {
      algorithms: ["HS256"],
    });
    return payload as EncryptData;
  } catch (error) {
    console.error("🚀 ~ decrypt ~ Token decryption failed:", error);
    return null;
  }
};

// Function to set access token in cookies
export const setAccessToken = async (userData: UserResponse) => {
  const expires = new Date(Date.now() + EXPIRY_TIME * 1000);
  const encryptedToken = await encrypt({
    userData,
    expires,
  } as EncryptData);
  const cookiesStore = await cookies();
  cookiesStore.set(ACCESS_TOKEN_KEY, encryptedToken, {
    expires,
    httpOnly: true,
  });
};

export async function updateSession(request: NextRequest) {
  const user = await getUserToken();
  const path = request.nextUrl.pathname;
  const redirectParam = request.nextUrl.searchParams.get("redirect");

  if (!user && path !== "/login") {
    return NextResponse.redirect(
      new URL(`/login?redirect=${path}`, request.url),
    );
  }

  if (user && path === "/login") {
    const redirectPath = redirectParam || "/";
    return NextResponse.redirect(new URL(redirectPath, request.url));
  }

  if (!user) {
    return NextResponse.next();
  }

  // Refresh the session so it doesn't expire
  user.expires = new Date(Date.now() + EXPIRY_TIME * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: ACCESS_TOKEN_KEY,
    value: await encrypt(user),
    httpOnly: true,
    expires: user.expires,
  });
  return res;
}

// Function to get access token from cookies
export const getUserToken = async (): Promise<EncryptData | null> => {
  const cookiesStore = await cookies();
  const token = cookiesStore.get(ACCESS_TOKEN_KEY)?.value;
  if (!token) {
    return null;
  }

  const payload = await decrypt(token);
  if (!payload) {
    return null;
  }
  return payload;
};

export async function getUser() {
  const session = await getUserToken();

  if (!session?.userData) {
    return redirect("/login");
  }

  if ("data" in session.userData) {
    return session.userData.data;
  }
  return session.userData;
}

// Function to clear access token from cookies
export const clearAccessToken = async () => {
  const cookiesStore = await cookies();
  cookiesStore.set(ACCESS_TOKEN_KEY, "", { expires: new Date(0) });
};
