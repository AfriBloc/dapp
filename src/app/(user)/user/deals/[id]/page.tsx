import BackButton from "@/components/main/user/back-button";
import BedroomSlider from "@/components/main/user/deals/bedroom-slider";
import DealDetail from "@/components/main/user/deals/detail/deal-detail";
import InvestAction from "@/components/main/user/deals/detail/invest-action";
import KycStatInfo from "@/components/ui/info/kyc-stat-info";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deal details",
};

export default function page() {
  return (
    <main className="text-Gray-900">
      <section className="col-start container gap-5 py-8 md:py-12">
        <BackButton />
        <KycStatInfo />
        <h1 className="text-2xl font-bold lg:text-[40px] lg:leading-[100%]">
          Two bedroom Terrace
        </h1>
        <BedroomSlider />
        <div className="grid w-full gap-6 lg:grid-cols-2">
          <DealDetail />
          <InvestAction />
        </div>
      </section>
    </main>
  );
}
