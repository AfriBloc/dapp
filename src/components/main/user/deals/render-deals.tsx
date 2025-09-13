import { DealCard } from "./deal-card";
import { getAllProperties } from "@/services/apis/properties.api";
import EmptyState from "@/components/ui/empty-state";

export default async function RenderDeals() {
  const rsp = await getAllProperties();

  if (!rsp?.ok) {
    return (
      <EmptyState
        title="Error"
        description={rsp?.body?.message}
        className="min-h-[400px]"
      />
    );
  }
  if (rsp?.body?.data?.length === 0) {
    return (
      <EmptyState
        title="No Data"
        description="No Propperties"
        className="min-h-[400px]"
      />
    );
  }
  return (
    <div className="text-Gray-900 grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
      {rsp?.body?.data?.map((property, idx: number) => (
        <DealCard key={property.id} deal={property} />
      ))}
    </div>
  );
}
