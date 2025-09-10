"use client";
import Image from "next/image";
import DynamicSwiper from "@/components/ui/swiper/dynamic-swiper";
import { Property } from "@/types/property";

export default function BedroomSlider({ property }: { property: Property }) {
  return (
    <div className="flex-center h-[350px] w-full rounded-2xl">
      <DynamicSwiper
        data={property.images}
        slidesPerView={1}
        className="!mx-0 size-full max-w-full"
        showPagination={false}
        showNavigation={false}
        showCustomPaginationPagination={true}
        customPaginationClassName="absolute w-fit left-2/4 right-2/4 -translate-x-2/4 bottom-2 z-10"
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        renderSlide={(imageSrc) => {
          return (
            <Image
              src={imageSrc}
              width={320}
              height={400}
              alt={property.description}
              className="mx-auto !h-[90%] w-[50%] rounded-lg border border-gray-100"
            />
          );
        }}
      />
    </div>
  );
}
