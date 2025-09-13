"use client";
import BaseButton from "@/components/ui/buttons/base-button";
import DealImage1 from "/public/images/deal1.png";
import DealImage2 from "/public/images/deal2.png";
import DealImage3 from "/public/images/deal3.png";
import MapIndicator from "/public/svgs/map-indicator.svg";
import Image from "next/image";
import ProgressBar from "@/components/ui/progress-bar/progress-bar";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { properties } from "@/mocks/properties";
import { Property } from "@/types/property";

const dealImages = [DealImage1, DealImage2, DealImage3];

export default function FeaturedDeals() {
  const sectionRef = useRef(null);
  const titleConRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // H2 animation
      gsap.fromTo(
        titleConRef.current,
        { y: -150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            end: "top 50%",
            scrub: 1,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="deals" ref={sectionRef} className="text-Gray-900 py-16">
      <div className="col-center container gap-8 lg:gap-18">
        <div ref={titleConRef}>
          <h2 className="lg:tex-start text-center text-3xl font-bold lg:text-[40px] lg:leading-[100%]">
            Featured Deals
          </h2>
          <p className="text-center text-base font-normal">
            Curated opportunities with clear yield targets and hold periods.
          </p>
        </div>
        <div className="grid w-full gap-5 lg:grid-cols-3">
          {properties.map((property: Property, idx: number) => (
            <div
              key={property.id}
              className="col-start shadow-3xl w-full overflow-hidden rounded-2xl"
            >
              <Image
                src={dealImages[idx % dealImages.length]}
                alt="deal image"
                className="h-[294px] w-full"
              />
              <div className="col-start w-full gap-2 p-5">
                <h3 className="text-lg font-bold md:text-2xl">
                  {property.description}
                </h3>
                <div className="flex-start gap-1">
                  <Image src={MapIndicator} alt="icon" />
                  <p className="text-Gray-700 text-sm font-normal">
                    {property.location}
                  </p>
                </div>
                <div className="border-BlueGray-100 flex-between w-full gap-2 rounded-full border px-3 py-2">
                  <ProgressBar percentage={75} className="h-2 flex-1" />{" "}
                  {/* Placeholder percentage */}
                  <span className="text-sm font-normal">75%</span>{" "}
                  {/* Placeholder percentage */}
                </div>
                <div className="border-Blue-100 my-3 flex w-full flex-wrap items-start justify-start gap-6 rounded-xl border px-4 py-2">
                  <div className="col-start gap-1.5">
                    <span className="text-Gray-700 text-xs font-normal">
                      Projected ROI
                    </span>
                    <span className="text-sm font-normal lg:text-base">
                      {property.annualizedROI}
                    </span>
                  </div>
                  <div className="col-start gap-1.5">
                    <span className="text-Gray-700 text-xs font-normal">
                      Gross yield
                    </span>
                    <span className="text-sm font-normal lg:text-base">
                      {property.grossRentalYield}
                    </span>
                  </div>
                </div>
                <BaseButton
                  href="/create-an-account"
                  className="w-full px-8 !text-base"
                >
                  Own this bloc
                </BaseButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
