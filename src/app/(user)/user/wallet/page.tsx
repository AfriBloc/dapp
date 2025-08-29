import TransactionHistory from "@/components/main/user/wallet/transaction-history";
import WalletBalanceCard from "@/components/main/user/wallet/wallet-balance-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wallet",
};

export default function page() {
  return (
    <main className="text-Gray-900 bg-white">
      <section className="col-start container gap-5 py-14">
        <h1 className="text-2xl font-bold lg:text-[40px] lg:leading-[100%]">
          Wallet
        </h1>
        <WalletBalanceCard />
        <TransactionHistory />
      </section>
    </main>
  );
}
