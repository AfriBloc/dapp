"use client";

import { getRates } from "@/services/apis/properties.api";
import { useQuery } from "@tanstack/react-query";
import { createContext, ReactNode, useContext, useState } from "react";

type CurrencyTypes = {
  currency: string;
  setCurrency: (val: string) => void;
};

const CurrencyContext = createContext<CurrencyTypes>({} as CurrencyTypes);

export default function CurrencyProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { data } = useQuery({
    queryKey: ["rates"],
    queryFn: () => getRates("usd", "ngn"),
  });
  const [currency, setCurrency] = useState("$");

  console.log("rates", data);
  const value = {
    currency,
    setCurrency,
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrencyContext() {
  const context = useContext(CurrencyContext);

  if (context === undefined) {
    throw new Error(
      "useCurrencyContext must be used within a CurrencyProvider",
    );
  }

  return context;
}
