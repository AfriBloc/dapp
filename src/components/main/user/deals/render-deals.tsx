import DealImage1 from "/public/images/deal1.png";
import DealImage2 from "/public/images/deal2.png";
import DealImage3 from "/public/images/deal3.png";
import DealCard from "./deal-card";
import { properties } from "@/mocks/properties";
import { Property } from "@/types/property";

const dealImages = [DealImage1, DealImage2, DealImage3];

export default function RenderDeals() {
  return (
    <div className="text-Gray-900 grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
      {properties.map((property: Property, idx: number) => (
        <DealCard key={property.id} deal={property} imageSrc={dealImages[idx % dealImages.length]} />
      ))}
    </div>
  );
}
