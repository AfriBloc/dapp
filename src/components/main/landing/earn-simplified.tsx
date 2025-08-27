import Image from "next/image";
import EarnImage from "/public/images/earn-image.jpg";
import Shield from "/public/svgs/shield.svg";

export default function EarnSimplified() {
  return (
    <section id="earn" className="text-Gray-900 py-16">
      <div className="col-center container gap-8 lg:gap-18">
        <h2 className="lg:tex-start text-center text-3xl font-bold lg:text-[40px] lg:leading-[100%]">
          Your Earnings, Simplified
        </h2>
        <div className="bg-Orange-500 relative h-[557px] w-full overflow-hidden rounded-2xl">
          <Image
            src={EarnImage}
            alt="earn image"
            className="!size-full rounded-2xl object-cover"
          />
          <div className="absolute inset-0 flex size-full flex-col items-center justify-end gap-6 bg-black/20 px-5 py-10 md:flex-row md:justify-between lg:items-end">
            <div className="col-start gap-5 rounded-2xl bg-white p-4 lg:w-[314px]">
              <div className="flex items-center justify-start gap-1.5">
                <div className="bg-Orange-500 size-2" />
                <span className="text-sm font-normal md:text-base">
                  Automated monthly payouts
                </span>
              </div>
              <div className="flex items-center justify-start gap-1.5">
                <div className="bg-Orange-500 size-2" />
                <span className="text-sm font-normal md:text-base">
                  Live portfolio tracking
                </span>
              </div>
              <div className="flex items-center justify-start gap-1.5">
                <div className="bg-Orange-500 size-2" />
                <span className="text-sm font-normal md:text-base lg:max-w-[259px]">
                  Planned liquidity via a secondary marketplace
                  <span className="bg-Blue-25 text-Blue-600 ml-1.5 rounded-full px-2 py-1 text-xs font-normal">
                    Coming soon
                  </span>
                </span>
              </div>
            </div>
            <div className="col-start rounded-2xl bg-white p-4 lg:w-[314px]">
              <div className="flex items-center justify-start gap-1.5">
                <div className="bg-BlueGray-50 flex-center size-9 rounded-full">
                  <Image src={Shield} alt="shield icon" />
                </div>
                <span className="max-w-[159px] text-base font-semibold">
                  Trust & Security
                </span>
              </div>
              <span className="max-w-[259px] text-sm font-normal md:text-base">
                Independent valuations and local management partners. On-chain
                records and clear reporting keep everything transparent.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
