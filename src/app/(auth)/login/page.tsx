import LoginForm from "@/components/auth/login/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Log in",
};

export default function page() {
  return <LoginForm />;
}
