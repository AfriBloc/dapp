import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema } from "../schemas";
import { useOnboarding } from "@/providers/onboarding-provider";

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

  const onSubmit = (data: CreateAccountSchemaType) => {
    setFormData(data);
    next();
  };

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    formState,
  };
}
