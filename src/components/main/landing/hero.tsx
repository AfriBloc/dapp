import Image from "next/image";
import HeroImage from "/public/images/hero-video-thumbnail.png";
import Partner1 from "/public/svgs/doahq.svg";
import Partner2 from "/public/svgs/hedera.svg";

import BaseButton from "@/components/ui/buttons/base-button";

export default function Hero() {
  return (
    <section className="lg:p-4">
      <div className="bg-Purple-25 text-Gray-900 pt-26 lg:rounded-2xl lg:pt-40">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex size-full flex-col justify-center gap-4 px-2 lg:items-start lg:px-14">
            <h1 className="text-center text-4xl font-bold md:text-6xl md:leading-[120%] lg:text-start">
              Global Access to <br /> Africa’s Prime <br /> Real Estate
            </h1>
            <p className="max-w-[481px] text-center text-sm font-normal lg:text-start lg:text-lg">
              From Lagos to Nairobi, invest in high-growth cities, earn monthly
              dividends from rental income, and share in capital appreciation at
              exit.
            </p>
            <BaseButton
              href="/create-an-account"
              className="w-full px-8 !text-base lg:w-fit"
            >
              Own a Bloc
            </BaseButton>
            <div className="flex items-center justify-start lg:gap-2">
              <span className="text-xs font-normal">
                Strategic Partnerships
              </span>
              <div className="flex items-center justify-start gap-2">
                <Image src={Partner1} alt="partner image" className="" />
                <Image src={Partner2} alt="partner image" className="" />
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-center lg:items-end lg:justify-end">
            <Image
              src={HeroImage}
              alt="hero image"
              className="h-[400px] w-full max-w-[550px] lg:h-[490px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
