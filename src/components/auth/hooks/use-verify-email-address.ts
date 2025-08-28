import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EnterOTPSchema, EnterOTPSchemaType } from "../schemas";
import { useOnboarding } from "@/providers/onboarding-provider";
import { showToast } from "@/lib/toast";

export default function useVerifyEmailAddress() {
  const { steps, formData } = useOnboarding();
  const { next } = steps;
  const { register, handleSubmit, formState } = useForm<EnterOTPSchemaType>({
    resolver: zodResolver(EnterOTPSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    const verifyOTPData = {
      email: formData.email,
      otp: data.otp,
    };
    console.log("🚀 ~ useVerifyEmailAddress ~ verifyOTPData:", verifyOTPData);

    try {
      next();
    } catch {
      showToast("Something went wrong", "error");
    }
  });

  return { register, onSubmit, formState };
}
