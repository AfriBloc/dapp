"use client"
import BaseButton from "@/components/ui/buttons/base-button";
import MapIndicator from "/public/svgs/map-indicator.svg";
import BedIcon from "/public/svgs/bed.svg";
import BathtubIcon from "/public/svgs/bathtub.svg";
import RotateIcon from "/public/svgs/rotate.svg";
import Image, { StaticImageData } from "next/image";
import ProgressBar from "@/components/ui/progress-bar/progress-bar";
import { useCurrency } from "@/providers/currency-provider";

export default function DealCard({
  deal,
}: {
  deal: {
    title: string;
    imageSrc: StaticImageData;
    percentage: number;
  };
}) {
  const { formatAndConvertCurrency } = useCurrency();
  const listingPrice = 450000; 

  return (
    <div className="col-start w-full overflow-hidden rounded-2xl shadow-[0px_4px_20px_0px_#0000000D]">
      <Image
        src={deal.imageSrc}
        alt="deal image"
        className="h-[226px] w-full"
      />
      <div className="col-start w-full gap-2 p-5">
        <div className="flex flex-wrap items-center justify-start gap-2">
          <span className="text-Gray-800 border-Gray-50 border-r pr-2 text-xs font-normal">
            Apartment Terrace
          </span>
          <span className="text-Gray-800 border-Gray-50 flex items-center gap-1 border-r pr-2 text-xs font-normal">
            <Image src={BedIcon} alt="bed icon" /> 2 bed
          </span>
          <span className="text-Gray-800 border-Gray-50 flex items-center gap-1 border-r pr-2 text-xs font-normal">
            <Image src={BathtubIcon} alt="bathtub icon" /> 2 bath
          </span>
          <span className="text-Gray-800 border-Gray-50 flex items-center gap-1 text-xs font-normal">
            <Image src={RotateIcon} alt="rotate icon" /> 350 sqm2
          </span>
        </div>
        <h3 className="text-lg font-bold md:text-2xl">{deal.title}</h3>
        <div className="flex-start gap-1">
          <Image src={MapIndicator} alt="icon" />
          <p className="text-Gray-700 text-sm font-normal">
            Orchid road, Lekki, Lagos, Nigeria
          </p>
        </div>
        <div className="border-BlueGray-100 flex-between w-full gap-2 rounded-full border px-3 py-2">
          <ProgressBar percentage={deal.percentage} className="h-2 flex-1" />
          <span className="text-sm font-normal">{deal.percentage}%</span>
        </div>
        <div className="border-Blue-100 my-3 flex w-full flex-col items-start justify-start gap-2 rounded-xl border px-4 py-2">
          <div className="flex-between w-full gap-1.5">
            <span className="text-Gray-700 text-xs font-normal">
              Listing Price
            </span>
            <span className="text-Purple-400 text-base font-semibold md:text-lg">
              {formatAndConvertCurrency(listingPrice, "NGN")}
            </span>
          </div>
          <div className="flex-between w-full gap-1.5">
            <span className="text-Gray-700 text-xs font-normal">
              Current Market Value
            </span>
            <span className="text-base font-medium">11.5%</span>
          </div>
          <div className="flex-between w-full gap-1.5">
            <span className="text-Gray-700 text-xs font-normal">
              Gross yield
            </span>
            <span className="text-base font-medium">11.5%</span>
          </div>
        </div>
        <BaseButton
          href={`/user/deals/01020321`}
          className="w-full px-8 !text-base"
        >
          Own this bloc
        </BaseButton>
      </div>
    </div>
  );
}
