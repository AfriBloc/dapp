"use client";
import EmptyState from "@/components/ui/empty-state";
import React, { Suspense } from "react";
import PortfolioCard from "./portfolio-card";
import { useCurrencyContext } from "@/contexts/currencyProvider";

export default function PortfolioCards() {
  const { currency } = useCurrencyContext();
  return (
    <React.Fragment>
      <Suspense
        fallback={
          <EmptyState
            title="Total Portfolio"
            description={"0"}
            className="flex min-h-24 w-full flex-col gap-3 rounded-xl px-4 py-3.5 shadow-[0px_4px_20px_0px_#0000000D]"
          />
        }
      >
        <PortfolioCard
          title="Total Portfolio"
          value={`${currency}0.00`}
          noData={{
            title: "No data",
            description: "All portfolio will show here",
          }}
        />
      </Suspense>
      <Suspense
        fallback={
          <EmptyState
            title="Total Amount invested"
            description={"0"}
            className="flex min-h-24 w-full flex-col gap-3 rounded-xl px-4 py-3.5 shadow-[0px_4px_20px_0px_#0000000D]"
          />
        }
      >
        <PortfolioCard
          title="Total Amount invested"
          value={`${currency}0.00`}
          noData={{
            title: "No data",
            description: "All invested amount will show here",
          }}
        />
      </Suspense>
      <Suspense
        fallback={
          <EmptyState
            title="Total rental income to date"
            description={"0"}
            className="flex min-h-24 w-full flex-col gap-3 rounded-xl px-4 py-3.5 shadow-[0px_4px_20px_0px_#0000000D]"
          />
        }
      >
        <PortfolioCard
          title="Total rental income to date"
          value={`${currency}0.00`}
          noData={{
            title: "No data",
            description: "All rental income will show here",
          }}
        />
      </Suspense>
    </React.Fragment>
  );
}
