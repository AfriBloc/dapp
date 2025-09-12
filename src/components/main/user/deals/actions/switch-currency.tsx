"use client";
import { getCurrencySymbol } from "@/helpers/currency";
import { cn } from "@/lib/utils";
import { useCurrency } from "@/contexts/currency-provider";

export default function SwitchCurrency() {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="bg-Gray-25 text-Gray-500 hidden items-center justify-between gap-1.5 rounded-lg p-1 md:flex">
      {["USD", "NGN"].map((curr, idx) => (
        <button
          type="button"
          key={idx}
          className={cn(
            "flex-center size-9 rounded-lg transition-colors duration-300",
            currency === curr ? "text-Gray-900 bg-white" : "",
          )}
          onClick={() => setCurrency(curr)}
        >
          {getCurrencySymbol(curr)}
        </button>
      ))}
    </div>
  );
}
