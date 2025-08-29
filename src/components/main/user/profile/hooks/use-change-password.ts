"use client";

import { showToast } from "@/lib/toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useCheckPassword from "@/hooks/use-check-password";
import { ChangePasswordSchema, ChangePasswordSchemaType } from "../schemas";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useChangePassword() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { refresh } = useRouter();
  const { register, handleSubmit, formState, watch } =
    useForm<ChangePasswordSchemaType>({
      resolver: zodResolver(ChangePasswordSchema),
      defaultValues: {
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      },
    });

  const { passwordCheck, isDisabled } = useCheckPassword(watch("newPassword"));

  const onSubmit = handleSubmit(async (data) => {
    console.log("🚀 ~ useChangePassword ~ data:", data);
    if (!isDisabled) {
      try {
        showToast("Password updated");
        refresh();
        setIsModalOpen(false);
      } catch {
        showToast("Something went wrong", "error");
      }
    }
  });

  return {
    register,
    onSubmit,
    formState,
    passwordCheck,
    isModalOpen,
    setIsModalOpen,
  };
}
