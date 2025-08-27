import BaseButton from "@/components/ui/buttons/base-button";
import HowImage1 from "/public/images/how1.png";
import HowImage2 from "/public/images/how2.png";
import HowImage3 from "/public/images/how3.png";
import HowImage4 from "/public/images/how4.png";
import HowImage5 from "/public/images/how5.png";
import HowImage6 from "/public/images/how6.png";
import { cn } from "@/lib/utils";
import Image from "next/image";

const howData = [
  {
    title: "Sourcing & Acquisition",
    desc: "We buy undervalued properties in fast-growing African cities, prioritizing strong rental demand and clear upside.",
    imageSrc: HowImage1,
  },
  {
    title: "Tokenization",
    desc: "Each asset is structured and tokenized for transparent, verifiable ownership and fast settlement.",
    imageSrc: HowImage2,
  },
  {
    title: "Invest in Minutes",
    desc: "Start from $25 to own your first bloc. Fund with USDC (Hedera), Stripe (cards/bank), Fiat bank transfer, or mobile money in supported African countries.",
    imageSrc: HowImage3,
  },
  {
    title: "Renovate & Operate",
    desc: "We upgrade the properties and rent them (short-stay or long-let) to maximize net income.",
    imageSrc: HowImage4,
  },
  {
    title: "Monthly Dividends",
    desc: "Your share of net rental income is distributed every month to your wallet.",
    imageSrc: HowImage5,
  },
  {
    title: "Exit & Capital Growth",
    desc: "After 3–5 years, we sell the property and distribute your share of capital gains, in addition to any dividends already paid.",
    imageSrc: HowImage6,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="text-Gray-900 bg-white py-16">
      <div className="container">
        <div className="grid lg:grid-cols-[403px_1fr]">
          <div className="col-start gap-1">
            <h2 className="lg:text-start text-center text-3xl font-bold lg:text-[40px] lg:leading-[100%]">
              How it works
            </h2>
            <p className="max-w-[268px] text-center text-base font-normal lg:text-start">
              See how you can start earning from tokenized real estate
            </p>
          </div>
          <div className="no-scrollbar relative w-full overflow-x-scroll scroll-smooth whitespace-nowrap">
            {howData.map((data, idx) => (
              <div key={idx} className="relative first:ml-0 md:first:ml-6 mx-6 inline-block w-[393px] align-top pb-8">
                <div
                  className={cn(
                    "flex items-start justify-start overflow-hidden rounded-2xl shadow-[0px_4px_20px_0px_#0000000D]",
                    idx % 2 !== 0 ? "flex-col-reverse" : "flex-col",
                  )}
                >
                  <div className="col-start gap-2 px-5 py-6">
                    <h4 className="text-Orange-500 text-2xl font-bold md:text-3xl">
                      0{idx + 1}.
                    </h4>
                    <h3 className="text-lg font-semibold whitespace-normal md:text-2xl">
                      {data.title}
                    </h3>
                    <p className="text-base font-normal whitespace-normal">
                      {data.desc}
                    </p>
                  </div>
                  <Image
                    src={data.imageSrc}
                    alt="how image"
                    className="h-[294px] w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-center my-6 w-full">
          <BaseButton href="#" className="w-full px-8 !text-base lg:w-fit">
            Get Started
          </BaseButton>
        </div>
      </div>
    </section>
  );
}
