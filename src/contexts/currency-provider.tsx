"use client";

import React, {
  createContext,
  useState,
  use, // Changed from useContext to use
  useEffect,
  ReactNode,
} from "react";
import { convertCurrency, formatCurrency } from "@/helpers/currency";

interface CurrencyContextType {
  currency: string;
  setCurrency: (currency: string) => void;
  formatAndConvertCurrency: (amount: number, fromCurrency: string) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined,
);

export default function CurrencyProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [currency, setCurrencyState] = useState("USD");

  useEffect(() => {
    const storedCurrency = localStorage.getItem("selectedCurrency");
    if (storedCurrency) {
      setCurrencyState(storedCurrency);
    }
  }, []);

  const updateCurrency = (newCurrency: string) => {
    setCurrencyState(newCurrency);
    localStorage.setItem("selectedCurrency", newCurrency);
  };

  const formatAndConvertCurrency = (amount: number, fromCurrency: string) => {
    const convertedAmount = convertCurrency(amount, fromCurrency, currency);
    return formatCurrency(convertedAmount, currency);
  };

  const value = {
    currency,
    setCurrency: updateCurrency,
    formatAndConvertCurrency,
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = use(CurrencyContext);

  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}
