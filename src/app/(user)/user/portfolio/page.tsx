import SwitchCurrency from "@/components/main/user/deals/actions/switch-currency";
import MyPortfolios from "@/components/main/user/portfolio/my-portfolios";
import PortfolioCards from "@/components/main/user/portfolio/portfolio-cards";
import KycStatInfo from "@/components/ui/info/kyc-stat-info";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function page() {
  return (
    <main className="text-Gray-900 bg-white">
      <section className="col-start container gap-5 py-14">
        <div className="flex-between w-full">
          <h1 className="text-2xl font-bold lg:text-[40px] lg:leading-[100%]">
            Portfolio
          </h1>
          <SwitchCurrency />
        </div>
        <KycStatInfo />
        <div className="grid w-full grid-cols-1 items-start justify-start gap-5 lg:grid-cols-3">
          <PortfolioCards />
        </div>
        <MyPortfolios />
      </section>
    </main>
  );
}
