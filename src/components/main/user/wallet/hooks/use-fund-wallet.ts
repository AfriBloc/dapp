"use client";

import { showToast } from "@/lib/toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FundWalletSchema, FundWalletSchemaType } from "../schemas";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useFundWallet() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { refresh } = useRouter();
  const { register, handleSubmit, formState, watch, setValue } =
    useForm<FundWalletSchemaType>({
      resolver: zodResolver(FundWalletSchema),
      defaultValues: {
        amount: undefined,
        paymentMethod: "",
      },
    });

  const onSubmit = handleSubmit(async (data) => {
    console.log("🚀 ~ useFundWallet ~ data:", data);
    try {
      showToast("Wallet funded successfully");
      refresh();
      setIsModalOpen(false);
    } catch {
      showToast("Something went wrong", "error");
    }
  });

  return {
    register,
    onSubmit,
    formState,
    isModalOpen,
    setIsModalOpen,
    watch,
    setValue,
  };
}
