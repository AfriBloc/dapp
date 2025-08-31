"use client";
import { useCurrency } from "@/providers/currency-provider";
import FundWalletModal from "./modals/fund-wallet-modal";
import WithdrawModal from "./modals/withdraw-modal";
import { formatCurrency } from "@/helpers/currency";

export default function WalletBalanceCard() {
  const { currency } = useCurrency();
  
  return (
    <div className="flex min-h-24 w-full flex-col gap-3 rounded-xl bg-white px-4 py-3.5 shadow-[0px_4px_20px_0px_#0000000D] md:flex-row md:items-center md:justify-between">
      <div className="col-start">
        <h3 className="text-Gray-700 text-sm font-normal">
          Total Wallet Balance
        </h3>
        <p className="text-Gray-900 text-lg font-bold md:text-2xl">
          {formatCurrency(0, currency)}
        </p>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-3 md:w-fit md:flex-row">
        <WithdrawModal />
        <FundWalletModal />
      </div>
    </div>
  );
}
