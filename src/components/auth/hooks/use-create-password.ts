import { showToast } from "@/lib/toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useCheckPassword from "@/hooks/use-check-password";
import { useOnboarding } from "@/providers/onboarding-provider";
import { SignUpSchema, SignUpSchemaType } from "../schemas";

export default function useCreatePassword() {
  const { steps, formData } = useOnboarding();
  const { next } = steps;

  const { register, handleSubmit, formState, watch } =
    useForm<SignUpSchemaType>({
      resolver: zodResolver(SignUpSchema),
      defaultValues: {
        ...formData,
        password: "",
        confirmPassword: "",
      },
    });

  const { passwordCheck, isDisabled } = useCheckPassword(watch("password"));

  const onSubmit = handleSubmit(async (data) => {
    console.log("🚀 ~ useCreateNewPassword ~ data:", data);
    if (!isDisabled) {
      try {
        next();
      } catch {
        showToast("Something went wrong", "error");
      }
    }
  });

  return { register, onSubmit, formState, passwordCheck };
}
