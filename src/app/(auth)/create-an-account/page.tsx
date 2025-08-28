import OnboardingProvider from "@/providers/onboarding-provider";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Create an account",
};

export default function page() {
  return (
    <Suspense>
      <OnboardingProvider />
    </Suspense>
  );
}
