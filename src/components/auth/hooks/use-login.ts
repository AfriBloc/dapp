import { useRouter } from "next/navigation";
import { showToast } from "@/lib/toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, LoginSchemaType } from "../schemas";
import { loginUser } from "@/lib/actions/auth.actions";

export default function useLogin() {
  const { push } = useRouter();
  const { register, handleSubmit, formState, reset } = useForm<LoginSchemaType>(
    {
      resolver: zodResolver(LoginSchema),
    },
  );

  const onSubmit = async (data: LoginSchemaType) => {
    const payload: Login = {
      identifier: data.email,
      password: data.password,
    };
    try {
      const res = await loginUser(payload);
      if (!res.error) {
        showToast(res.message);
        push("/user/deals");
      } else {
        showToast(res.message, "error");
      }
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
