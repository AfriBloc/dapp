import BackButton from "@/components/main/user/back-button";
import BedroomSlider from "@/components/main/user/deals/bedroom-slider";
import DealDetail from "@/components/main/user/deals/detail/deal-detail";
import InvestAction from "@/components/main/user/deals/detail/invest-action";
import KycStatInfo from "@/components/ui/info/kyc-stat-info";
import { Metadata } from "next";
import { properties } from "@/mocks/properties";
import EmptyState from "@/components/ui/empty-state";
import BaseButton from "@/components/ui/buttons/base-button";

export const metadata: Metadata = {
  title: "Deal details",
};

export default async function Page({ params }: { params: Promise<Params> }) {
  const { id } = await params;
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <EmptyState
        title={`No Property with ${id} found`}
        description="Take a look at our properties and start investing today!"
        className="min-h-[400px]"
        renderContent={
          <div className="w-full pt-8">
            <BaseButton href="/user/deals" className="px-10 py-4 md:px-20">
              Explore deals
            </BaseButton>
          </div>
        }
      />
    );
  }

  return (
    <main className="text-Gray-900">
      <section className="col-start container gap-5 py-8 md:py-12">
        <BackButton />
        <KycStatInfo />
        <h1 className="text-2xl font-bold lg:text-[40px] lg:leading-[100%]">
          {property.description}
        </h1>
        <BedroomSlider />
        <div className="grid w-full gap-6 lg:grid-cols-2">
          <DealDetail property={property} />
          <div className="sticky top-24 z-50 self-start">
            <InvestAction property={property} />
          </div>
        </div>
      </section>
    </main>
  );
}
