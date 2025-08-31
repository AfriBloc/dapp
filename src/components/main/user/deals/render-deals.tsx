import DealImage1 from "/public/images/deal1.png";
import DealImage2 from "/public/images/deal2.png";
import DealImage3 from "/public/images/deal3.png";
import DealCard from "./deal-card";

const dealData = [
  {
    title: "Two bedroom Terrace",
    imageSrc: DealImage1,
    percentage: 10,
  },
  {
    title: "Tokenization",

    imageSrc: DealImage2,
    percentage: 90,
  },
  {
    title: "Invest in Minutes",
    imageSrc: DealImage3,
    percentage: 50,
  },
  {
    title: "Two bedroom Terrace",
    imageSrc: DealImage1,
    percentage: 10,
  },
  {
    title: "Tokenization",

    imageSrc: DealImage2,
    percentage: 90,
  },
  {
    title: "Invest in Minutes",
    imageSrc: DealImage3,
    percentage: 50,
  },
];

export default function RenderDeals() {
  return (
    <div className="text-Gray-900 grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
      {dealData.map((data, idx) => (
        <DealCard key={idx} deal={data} />
      ))}
    </div>
  );
}
