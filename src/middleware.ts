import { NextRequest } from "next/server";
import { updateSession } from "./services/auth";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: ["/user/:path*"],
};
