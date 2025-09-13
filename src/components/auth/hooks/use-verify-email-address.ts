import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EnterOTPSchema, EnterOTPSchemaType } from "../schemas";
import { useOnboarding } from "@/providers/onboarding-provider";
import { showToast } from "@/lib/toast";
import { verifyOtp } from "@/lib/actions/auth.actions";

export default function useVerifyEmailAddress() {
  const { steps, formData } = useOnboarding();
  const { next } = steps;
  const { register, handleSubmit, formState } = useForm<EnterOTPSchemaType>({
    resolver: zodResolver(EnterOTPSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    const payload = {
      email: formData.email,
      otp: Number(data.otp),
    };

    try {
      const res = await verifyOtp(payload);
      if (!res.error) {
        showToast(res.message);
        next();
      } else {
        showToast(res.message, "error");
      }
    } catch {
      showToast("Something went wrong", "error");
    }
  });

  return { register, onSubmit, formState };
}
