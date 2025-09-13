import { showToast } from "@/lib/toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useCheckPassword from "@/hooks/use-check-password";
import { useOnboarding } from "@/providers/onboarding-provider";
import { SignUpSchema, SignUpSchemaType } from "../schemas";
import { registerUser } from "@/lib/actions/auth.actions";

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
    if (!isDisabled) {
      try {
        const res = await registerUser(data);
        if (!res.error) {
          showToast(res.message);
          next();
        } else {
          showToast(res.message, "error");
        }
      } catch {
        showToast("Something went wrong", "error");
      }
    }
  });

  return { register, onSubmit, formState, passwordCheck };
}
