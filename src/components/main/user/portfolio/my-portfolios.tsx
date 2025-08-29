import BaseButton from "@/components/ui/buttons/base-button";
import EmptyState from "@/components/ui/empty-state";
import { cn } from "@/lib/utils";
import MapIndicator from "/public/svgs/map-indicator.svg";
import BedIcon from "/public/svgs/bed.svg";
import BathtubIcon from "/public/svgs/bathtub.svg";
import RotateIcon from "/public/svgs/rotate.svg";
import Image from "next/image";
import ProgressBar from "@/components/ui/progress-bar/progress-bar";

export default function MyPortfolios() {
  const data:{
    title: string,
    imageSrc: string,
    percentage: number,
  }[] = [];

  return (
    <div
      className={cn(
        "col-start text-Gray-900 w-full gap-1 rounded-xl p-5",
        data.length === 0
          ? "bg-white shadow-[0px_4px_20px_0px_#0000000D]"
          : "bg-BlueGray-25",
      )}
    >
      <h3 className="text-lg font-semibold">My Properties</h3>
      <div className="w-full">
        {data.length === 0 ? (
          <EmptyState
            title="No investment yet"
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
        ) : (
          <div className="text-Gray-900 grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.map((data, idx) => (
              <div
                key={idx}
                className="col-start w-full overflow-hidden rounded-2xl shadow-[0px_4px_20px_0px_#0000000D]"
              >
                <Image
                  src={data.imageSrc}
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
                  <h3 className="text-lg font-bold md:text-2xl">
                    {data.title}
                  </h3>
                  <div className="flex-start gap-1">
                    <Image src={MapIndicator} alt="icon" />
                    <p className="text-Gray-700 text-sm font-normal">
                      Orchid road, Lekki, Lagos, Nigeria
                    </p>
                  </div>
                  <div className="border-BlueGray-100 flex-between w-full gap-2 rounded-full border px-3 py-2">
                    <ProgressBar
                      percentage={data.percentage}
                      className="h-2 flex-1"
                    />
                    <span className="text-sm font-normal">
                      {data.percentage}%
                    </span>
                  </div>
                  <div className="border-Blue-100 my-3 flex w-full flex-col items-start justify-start gap-2 rounded-xl border px-4 py-2">
                    <div className="flex-between w-full gap-1.5">
                      <span className="text-Gray-700 text-xs font-normal">
                        Listing Price
                      </span>
                      <span className="text-Purple-400 text-base font-semibold md:text-lg">
                        ₦450,000,000
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
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
