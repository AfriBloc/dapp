"use client";

import { useOnboarding } from "@/providers/onboarding-provider";
import OnboardingWrapper from "./onboarding-wrapper";
import InputField from "@/components/ui/form/input-field";
import SubmitButton from "@/components/ui/buttons/submit-button";
import useVerifyEmailAddress from "../hooks/use-verify-email-address";
import ResendCode from "../enter-otp/resend-code";

export default function VerifyEmailAddress() {
  const { formData } = useOnboarding();
  const { email } = formData;

  const { register, onSubmit, formState } = useVerifyEmailAddress();
  const { errors, isSubmitting } = formState;

  return (
    <OnboardingWrapper
      title="Enter OTP"
      description="We sent a code to your email"
    >
      <form onSubmit={onSubmit} className="space-y-2">
        <InputField
          label="OTP"
          name="otp"
          type="number"
          inputMode="numeric"
          placeholder="Enter your otp"
          register={register("otp")}
          errorMessage={errors.otp}
        />

        <ResendCode email={email} />

        <SubmitButton isSubmitting={isSubmitting} className="mt-6 w-full">
          Continue
        </SubmitButton>
      </form>
    </OnboardingWrapper>
  );
}
