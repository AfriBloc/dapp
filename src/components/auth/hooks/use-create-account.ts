import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema } from "../schemas";
import { useOnboarding } from "@/providers/onboarding-provider";
import { showToast } from "@/lib/toast";
import { generateOtp } from "@/lib/actions/auth.actions";

const CreateAccountSchema = SignUpSchema.pick({
  firstName: true,
  lastName: true,
  email: true,
});

type CreateAccountSchemaType = z.infer<typeof CreateAccountSchema>;

export default function useCreateAccount() {
  const { steps, setFormData } = useOnboarding();
  const { next } = steps;

  const { register, handleSubmit, formState } =
    useForm<CreateAccountSchemaType>({
      resolver: zodResolver(CreateAccountSchema),
    });

  const onSubmit = async (data: CreateAccountSchemaType) => {
    setFormData(data);
    try {
      const res = await generateOtp({ email: data.email });
      if (!res.error) {
        showToast(res.message);
        next();
      } else {
        showToast(res.message, "error");
      }
    } catch {
      showToast("Something went wrong", "error");
    }
  };

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    formState,
  };
}
