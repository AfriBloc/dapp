import MapIndicator from "/public/svgs/map-indicator.svg";
import BedIcon from "/public/svgs/bed.svg";
import BathtubIcon from "/public/svgs/bathtub.svg";
import RotateIcon from "/public/svgs/rotate.svg";
import Image from "next/image";
import ProgressBar from "@/components/ui/progress-bar/progress-bar";
import { Info } from "lucide-react";

export default function DetailSection() {
  return (
    <div id="detail" className="col-start w-full gap-4 md:gap-6">
      <div className="col-start w-full gap-4">
        <div className="flex flex-wrap items-center justify-start gap-2">
          <span className="text-Gray-800 border-Gray-50 border-r pr-1.5 text-[10px] font-normal sm:pr-2 sm:text-xs">
            Apartment Terrace
          </span>
          <span className="text-Gray-800 border-Gray-50 flex items-center gap-1 border-r pr-1.5 text-[10px] font-normal sm:pr-2 sm:text-xs">
            <Image src={BedIcon} alt="bed icon" /> 2 bed
          </span>
          <span className="text-Gray-800 border-Gray-50 flex items-center gap-1 border-r pr-1.5 text-[10px] font-normal sm:pr-2 sm:text-xs">
            <Image src={BathtubIcon} alt="bathtub icon" /> 2 bath
          </span>
          <span className="text-Gray-800 border-Gray-50 flex items-center gap-1 text-[10px] font-normal sm:text-xs">
            <Image src={RotateIcon} alt="rotate icon" /> 350 sqm2
          </span>
        </div>
        <div className="flex w-full items-center justify-between lg:items-start">
          <div className="col-start gap-1">
            <h3 className="text-lg font-bold md:text-2xl">
              Two bedroom Terrace
            </h3>
            <div className="flex-start gap-1">
              <Image src={MapIndicator} alt="icon" />
              <p className="text-Gray-700 text-xs font-normal md:text-sm">
                Orchid road, Lekki, Lagos, Nigeria
              </p>
            </div>
          </div>
          <div className="col-end gap-1 lg:-translate-y-9">
            <h6 className="text-Gray-700 text-end text-xs font-normal whitespace-nowrap md:text-sm">
              Price per unit
            </h6>
            <h4 className="text-Purple-400 text-end text-base font-semibold md:text-lg">
              ₦5,000
            </h4>
          </div>
        </div>
        <div className="flex w-full items-center gap-4">
          <div className="hidden items-center justify-start md:flex">
            <div className="flex-start gap-1 pr-4">
              <Image src={MapIndicator} alt="icon" />
              <p className="text-Gray-700 text-xs font-normal">
                75,000 units sold
              </p>
            </div>
            <div className="flex-start border-Gray-50 gap-1 border-l pl-4">
              <Image src={MapIndicator} alt="icon" />
              <p className="text-Gray-700 text-xs font-normal">215 investors</p>
            </div>
          </div>
          <div className="border-BlueGray-100 flex-between w-full gap-2 rounded-full border px-3 py-2 md:flex-1">
            <ProgressBar percentage={10} className="h-2 flex-1" />
            <span className="text-sm font-normal">
              {10}% <span className="hidden md:inline">funded</span>
            </span>
          </div>
        </div>
      </div>
      <div className="grid w-full gap-5 lg:grid-cols-2">
        <ul className="bg-BlueGray-25 border-BlueGray-100 col-start w-full gap-3 rounded-lg border p-4">
          <li className="flex-between w-full">
            <span className="text-Gray-700 text-xs font-normal">
              Listing Price
            </span>
            <span className="text-Purple-400 text-base font-semibold md:text-lg">
              ₦450,000,000
            </span>
          </li>
          <li className="flex-between w-full">
            <span className="text-Gray-700 text-xs font-normal">
              Net Rental Yield
            </span>
            <span className="text-sm font-medium">5.24%</span>
          </li>
          <li className="flex-between w-full">
            <span className="text-Gray-700 text-xs font-normal">
              Annualised ROI
            </span>
            <span className="text-sm font-medium">11.5%</span>
          </li>
          <li className="flex-between w-full">
            <span className="text-Gray-700 text-xs font-normal">
              Gross Rental yield
            </span>
            <span className="text-sm font-medium">7.42%</span>
          </li>
          <li className="flex-between w-full">
            <span className="text-Gray-700 text-xs font-normal">
              Funded date
            </span>
            <span className="text-sm font-medium">7.42%</span>
          </li>
        </ul>
        <ul className="col-start border-BlueGray-100 w-full gap-3 rounded-lg border p-4">
          <h5 className="text-xs font-semibold md:text-sm">
            Investment cost breakdown
          </h5>
          <li className="flex-between w-full">
            <span className="flex-center text-Gray-700 gap-1 text-xs font-normal">
              Property cost <Info className="size-3" />
            </span>
            <span className="text-sm font-medium">₦435,000,000</span>
          </li>
          <li className="flex-between w-full">
            <span className="flex-center text-Gray-700 gap-1 text-xs font-normal">
              Purchase costs <Info className="size-3" />
            </span>
            <span className="text-sm font-medium">11.5%</span>
          </li>
          <li className="flex-between w-full">
            <span className="flex-center text-Gray-700 gap-1 text-xs font-normal">
              Transaction fees <Info className="size-3" />
            </span>
            <span className="text-sm font-medium">₦4,000</span>
          </li>
          <li className="flex-between w-full">
            <span className="flex-center text-Gray-700 gap-1 text-xs font-normal">
              MOF fees <Info className="size-3" />
            </span>
            <span className="text-sm font-medium">₦3,000</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
