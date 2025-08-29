"use client";
import { getCurrencySymbol } from "@/helpers/currency";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function SwitchCurrency() {
  const [currentCurrency, setCurrentCurrency] = useState("USD");

  return (
    <div className="bg-Gray-25 text-Gray-500 hidden items-center justify-between gap-1.5 rounded-lg p-1 md:flex">
      {["USD", "NGN"].map((currency, idx) => (
        <button
          type="button"
          key={idx}
          className={cn(
            "flex-center size-9 rounded-lg transition-colors duration-300",
            currentCurrency === currency ? "text-Gray-900 bg-white" : "",
          )}
          onClick={() => setCurrentCurrency(currency)}
        >
          {getCurrencySymbol(currency)}
        </button>
      ))}
    </div>
  );
}
