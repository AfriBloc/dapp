"use client";
import Image from "next/image";
import { useRef, useLayoutEffect } from "react";
import { useMediaQuery } from "react-responsive";
import HeroImage from "/public/images/hero-video-thumbnail.png";
import Partner1 from "/public/svgs/doahq.svg";
import Partner2 from "/public/svgs/hedera.svg";

import BaseButton from "@/components/ui/buttons/base-button";
import { gsap } from "@/lib/gsap";

export default function Hero() {
  const sectionRef = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const buttonRef = useRef(null);
  const stategryRef = useRef(null);
  const imageRef = useRef(null);

  const isMobile = useMediaQuery({ maxWidth: 768 });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      tl.to(h1Ref.current, { y: -300, opacity: 0, ease: "power1.inOut" }, 0)
        .to(pRef.current, { y: -250, opacity: 0, ease: "power1.inOut" }, 0)
        .to(buttonRef.current, { y: -200, opacity: 0, ease: "power1.inOut" }, 0)
        .to(
          stategryRef.current,
          { y: -150, opacity: 0, ease: "power1.inOut" },
          0,
        );

      if (isMobile) {
        tl.to(
          imageRef.current,
          { y: 200, opacity: 0, ease: "power1.inOut" },
          0,
        );
      } else {
        tl.to(
          imageRef.current,
          { x: 500, opacity: 0, ease: "power1.inOut" },
          0,
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section ref={sectionRef} className="lg:p-4">
      <div className="text-Gray-900 overflow-hidden bg-white bg-[url(/svgs/hero-bg.svg)] bg-cover bg-no-repeat pt-26 lg:rounded-2xl lg:pt-40">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex size-full flex-col justify-center gap-4 px-2 lg:items-start lg:px-14 lg:pb-20">
            <h1
              ref={h1Ref}
              className="text-center text-4xl font-bold md:text-6xl md:leading-[120%] lg:text-start"
            >
              Global Access to <br /> Africa’s Prime <br /> Real Estate
            </h1>
            <p
              ref={pRef}
              className="max-w-[481px] text-center text-sm font-normal lg:text-start lg:text-lg"
            >
              From Lagos to Nairobi, invest in high-growth cities, earn monthly
              dividends from rental income, and share in capital appreciation at
              exit.
            </p>
            <BaseButton
              ref={buttonRef}
              href="/create-an-account"
              className="w-full px-8 !text-base lg:w-fit"
            >
              Own a Bloc
            </BaseButton>
            <div
              ref={stategryRef}
              className="flex items-center justify-start lg:gap-2"
            >
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
              ref={imageRef}
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
