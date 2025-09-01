import { useRouter } from "next/navigation";
import { showToast } from "@/lib/toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, LoginSchemaType } from "../schemas";

export default function useLogin() {
  const { push } = useRouter();
  const { register, handleSubmit, formState, reset } = useForm<LoginSchemaType>(
    {
      resolver: zodResolver(LoginSchema),
    },
  );

  const onSubmit = async (data: LoginSchemaType) => {
    console.log("🚀 ~ onSubmit ~ data:", data);
    try {
      push("/user/deals");
      showToast("Login Successful");
    } catch (error) {
      showToast(
        error instanceof Error ? error.message : "Something went wrong",
        "error",
      );
    }
  };

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    formState,
    reset,
  };
}
