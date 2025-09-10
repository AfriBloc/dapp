import DealCard from "./deal-card";
import { properties } from "@/mocks/properties";
import { Property } from "@/types/property";

export default function RenderDeals() {
  return (
    <div className="text-Gray-900 grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
      {properties.map((property: Property) => (
        <DealCard key={property.id} deal={property} />
      ))}
    </div>
  );
}
