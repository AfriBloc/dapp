import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import MapIndicator from "/public/svgs/map-indicator.svg";
import BedIcon from "/public/svgs/bed.svg";
import BathtubIcon from "/public/svgs/bathtub.svg";
import KitchenIcon from "/public/svgs/kitchen.svg";
import ChairIcon from "/public/svgs/chair.svg";
import Image from "next/image";

const whyBreakdowns = [
  {
    title: "Modern Urban Living",
    content:
      "J One Tower in Business Bay offers stylish, fully furnished apartments with smart layouts and premium finishes, set within a dynamic community.",
  },
  {
    title: "Excellent Facilities",
    content:
      "Residents enjoy amenities such as temperature controlled infinity pools, a fully equipped gym, spa with sauna and steam rooms, children’s play areas, sky gardens, 24/7 security, concierge services, and on site retail outlets.",
  },
  {
    title: "Strong Rental Appeal",
    content:
      "This 12th floor unit with peaceful community and lake views is vacant and ready for immediate occupancy, appealing to long term tenants and ensuring consistent rental demand.",
  },
  {
    title: "Attractive Investment Returns",
    content:
      "The unit provides an estimated net rental yield of 5.09% in the first year, a projected average rental yield over 5 years 5.24% over five years, and an annualized ROI of 11.55% over five years, which includes both capital appreciation and rental returns.",
  },
  {
    title: "Below Market Price",
    content:
      "Priced at NGN 1,700,000 approximately 9.33% below the Estimated NGN 1,874,943 valuation by third party company, offering a strong capital gain potential.",
  },
  {
    title: "Prime Location",
    content:
      "Strategically located in Orchid road with easy access to Lekki Phase one, and environs, ensuring excellent connectivity.",
  },
];

export default function CostBreakdownSection() {
  const [openCost, setOpenCost] = useState({
    description: true,
    why: true,
  });

  const [openWhy, setOpenWhy] = useState<number>(0);

  const toggleWhy = (index: number) => {
    setOpenWhy(index);
  };

  return (
    <div id="cost-breakdown" className="col-start w-full gap-6">
      <div className="border-BlueGray-100 w-full rounded-lg border p-3 text-start outline-none">
        <button
          type="button"
          onClick={() =>
            setOpenCost({
              ...openCost,
              description: !openCost.description,
            })
          }
          className="flex w-full items-center justify-between select-none"
        >
          <h4 className="max-w-[511px] text-base font-semibold">Description</h4>
          <ChevronDown
            className={`text-base text-inherit ${
              openCost.description ? "rotate-180" : "rotate-0"
            } transition-all duration-300`}
          />
        </button>
        <div
          className={cn(
            "text-Gray-800 w-full space-y-5 overflow-hidden text-xs font-normal transition-all duration-300 md:text-sm",
            openCost.description ? "max-h-[1000px] py-2" : "max-h-0",
          )}
        >
          <p>
            J One Tower, located in the vibrant Business Bay community, is a
            modern twin-tower development offering luxurious urban living with
            easy access to key Dubai landmarks. <br /> <br />
            The subject unit, situated on the 12th floor, is a fully furnished
            76.16 sqm apartment featuring a serene community view, with a
            picturesque lake located behind the building, enhancing the tranquil
            atmosphere. C <br />
            <span className="text-Purple-500">Read more</span>
          </p>
          <div className="col-start w-full gap-2">
            <h6 className="text-xs font-semibold md:text-sm">What’s in it</h6>
            <div className="flex w-full max-w-[70%] flex-wrap items-center justify-start gap-2">
              <span className="text-Gray-800 border-Gray-50 flex items-center gap-1 border-r pr-1.5 text-[10px] font-normal sm:pr-2 sm:text-xs">
                <Image src={BedIcon} alt="bed icon" /> 1 Bedroom
              </span>
              <span className="text-Gray-800 border-Gray-50 flex items-center gap-1 border-r pr-1.5 text-[10px] font-normal sm:pr-2 sm:text-xs">
                <Image src={BathtubIcon} alt="bathtub icon" /> 1 Bathroom
              </span>
              <span className="text-Gray-800 border-Gray-50 flex items-center gap-1 text-[10px] font-normal sm:text-xs">
                <Image src={KitchenIcon} alt="kitchen icon" /> 1 Kitchen
              </span>
              <span className="text-Gray-800 border-Gray-50 flex items-center gap-1 pr-1.5 text-[10px] font-normal sm:pr-2 sm:text-xs">
                <Image src={ChairIcon} alt="chair icon" /> 1 Living room
              </span>
            </div>
          </div>
          <div className="col-start w-full gap-2">
            <h6 className="text-xs font-semibold md:text-sm">Amenities</h6>
            <div className="flex w-full max-w-[70%] flex-wrap items-center justify-start gap-2">
              <span className="text-Gray-800 border-Gray-50 flex items-center gap-1 border-r pr-1.5 text-[10px] font-normal sm:pr-2 sm:text-xs">
                <Image src={BedIcon} alt="bed icon" /> Playing area
              </span>
              <span className="text-Gray-800 border-Gray-50 flex items-center gap-1 border-r pr-1.5 text-[10px] font-normal sm:pr-2 sm:text-xs">
                <Image src={BathtubIcon} alt="bathtub icon" /> Community view
              </span>
              <span className="text-Gray-800 border-Gray-50 flex items-center gap-1 text-[10px] font-normal sm:text-xs">
                <Image src={KitchenIcon} alt="kitchen icon" /> Spa
              </span>
              <span className="text-Gray-800 border-Gray-50 flex items-center gap-1 border-r pr-1.5 text-[10px] font-normal sm:pr-2 sm:text-xs">
                <Image src={ChairIcon} alt="chair icon" /> Gym
              </span>
              <span className="text-Gray-800 border-Gray-50 flex items-center gap-1 border-r pr-1.5 text-[10px] font-normal sm:pr-2 sm:text-xs">
                <Image src={BedIcon} alt="bathtub icon" /> Health Club
              </span>
              <span className="text-Gray-800 border-Gray-50 flex items-center gap-1 border-r pr-1.5 text-[10px] font-normal sm:pr-3 sm:text-xs">
                <Image src={BathtubIcon} alt="baththub icon" /> Covered parking
              </span>
              <span className="text-Gray-800 border-Gray-50 flex items-center gap-1 text-[10px] font-normal sm:text-xs">
                <Image src={KitchenIcon} alt="kitchen icon" /> Swimming Pool
              </span>
            </div>
          </div>
          <div className="col-start w-full gap-2">
            <h6 className="text-xs font-semibold md:text-sm">Location</h6>
            <div className="flex-start gap-1">
              <Image src={MapIndicator} alt="icon" />
              <p className="text-Gray-700 text-xs font-normal md:text-sm">
                Orchid road, Lekki, Lagos, Nigeria
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.490457315629!2d3.5093916736493402!3d6.4593729239079964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf697d9db5b5b%3A0xf66667ed1445e65!2sOrchid%20Rd%2C%20Lekki%20Penninsula%20II%2C%20Lekki%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1756412518407!5m2!1sen!2sng"
              width="100%"
              height="150"
              style={{ border: "0" }}
              allowFullScreen={true}
              loading="lazy"
              className="rounded-lg"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="border-BlueGray-100 w-full rounded-lg border p-3 text-start outline-none">
        <button
          type="button"
          onClick={() =>
            setOpenCost({
              ...openCost,
              why: !openCost.why,
            })
          }
          className="flex w-full items-center justify-between select-none"
        >
          <h4 className="max-w-[511px] text-base font-semibold">
            Why Invest in this Property?
          </h4>
          <ChevronDown
            className={`text-base text-inherit ${
              openCost.description ? "rotate-180" : "rotate-0"
            } transition-all duration-300`}
          />
        </button>
        <div
          className={cn(
            "text-Gray-800 w-full space-y-5 overflow-hidden text-xs font-normal transition-all duration-300 md:text-sm",
            openCost.description ? "max-h-[1000px] py-2" : "max-h-0",
          )}
        >
          <div className="col-start w-full gap-y-3">
            {whyBreakdowns.map(
              (why: { title: string; content: string }, idx: number) => (
                <button
                  key={idx}
                  onClick={() => toggleWhy(idx)}
                  className="border-BlueGray-50 bg-BlueGray-50 w-full rounded-2xl border p-3 text-start outline-none"
                >
                  <div className="flex w-full items-center justify-between select-none">
                    <h4 className="max-w-[511px] text-sm font-semibold">
                      {why.title}
                    </h4>
                    <ChevronDown
                      className={`text-sm text-inherit ${
                        openWhy === idx ? "rotate-180" : "rotate-0"
                      } transition-all duration-300`}
                    />
                  </div>
                  <p
                    className={cn(
                      "w-full overflow-hidden text-xs font-normal transition-all duration-300 md:text-sm",
                      openWhy === idx ? "max-h-[1000px] py-2" : "max-h-0",
                    )}
                  >
                    {why.content}
                  </p>
                </button>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
