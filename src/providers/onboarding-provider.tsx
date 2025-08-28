"use client";

import { createContext, useState, use } from "react";
import { useMultiStep } from "@/hooks/use-multi-step";
import CreateAnAccount from "@/components/auth/create-an-account/create-an-account";
import VerifyEmailAddress from "@/components/auth/create-an-account/verify-email-address";
import CreatePassword from "@/components/auth/create-an-account/create-password";
import AccountCreatedSuccessful from "@/components/auth/create-an-account/account-created-successful";

type OnboardingContextType = {
  steps: ReturnType<typeof useMultiStep>;
  formData: SignUp;
  setFormData: (data: Partial<OnboardingContextType["formData"]>) => void;
};

const onboardingSteps = [
  <CreateAnAccount key="createAccount" />,
  <VerifyEmailAddress key="verifyEmailAddress" />,
  <CreatePassword key="createPassword" />,
  <AccountCreatedSuccessful key="createdSuccessful" />,
];

const OnboardingContext = createContext<OnboardingContextType | undefined>(
  undefined,
);

export default function OnboardingProvider() {
  const steps = useMultiStep(onboardingSteps);

  const [formData, setFormDataState] = useState<
    OnboardingContextType["formData"]
  >({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const setFormData = (data: Partial<OnboardingContextType["formData"]>) => {
    setFormDataState((prev) => ({ ...prev, ...data }));
  };

  const value = {
    steps,
    formData,
    setFormData,
  };

  return (
    <OnboardingContext value={value}>
      <div className="mx-auto w-full max-w-[408px]">{steps.currentStep}</div>
    </OnboardingContext>
  );
}

export function useOnboarding() {
  const context = use(OnboardingContext);

  if (context === undefined) {
    throw new Error("useOnboarding must be used within an OnboardingProvider");
  }

  return context;
}
