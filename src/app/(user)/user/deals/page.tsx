import DealActions from "@/components/main/user/deals/actions/deals-actions";
import RenderDeals from "@/components/main/user/deals/render-deals";
import KycStatInfo from "@/components/ui/info/kyc-stat-info";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deals",
};

export default function page() {
  return (
    <main className="text-Gray-900 bg-white">
      <section className="col-start container gap-5 py-12 md:py-14">
        <h1 className="text-2xl font-bold lg:text-[40px] lg:leading-[100%]">
          Deals
        </h1>
        <KycStatInfo />
        <DealActions />
        <RenderDeals />
      </section>
    </main>
  );
}
