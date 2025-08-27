import Image from "next/image";
import WhyImage from "/public/images/why-image.png";
import WhyIcon1 from "/public/svgs/coins.svg";
import WhyIcon2 from "/public/svgs/plant.svg";
import WhyIcon3 from "/public/svgs/coin.svg";
import WhyIcon4 from "/public/svgs/notepad.svg";
import WhyIcon5 from "/public/svgs/warehouse.svg";

const whyData = [
  {
    title: "Higher yields than many developed markets",
    iconSrc: WhyIcon1,
  },
  {
    title: "Prime growth exposure across Africa’s fastest-rising cities",
    iconSrc: WhyIcon2,
  },
  {
    title: "Low minimums; start from $25",
    iconSrc: WhyIcon3,
  },
  {
    title: "Transparent by design; on-chain ownership & clear reporting",
    iconSrc: WhyIcon4,
  },
  {
    title: "Fully managed: sourcing, renovations, tenanting, distributions",
    iconSrc: WhyIcon5,
  },
];

export default function Why() {
  return (
    <section id="why-afribloc" className="bg-BlueGray-25 text-Gray-900 py-16">
      <div className="col-center container gap-8 lg:gap-18">
        <h2 className="lg:tex-start text-center text-3xl font-bold lg:text-[40px] lg:leading-[100%]">
          Why AfriBloc
        </h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="col-start gap-6">
            {whyData.map((info, idx) => (
              <div key={idx} className="flex-start gap-4">
                <div className="bg-Gray-25 flex-center size-9 rounded-full">
                  <Image src={info.iconSrc} alt="why source" />
                </div>
                <p className="text-base font-normal">{info.title}</p>
              </div>
            ))}
          </div>
          <div className="flex-center lg:pl-16">
            <Image src={WhyImage} alt="why image" className="h-auto md:h-[275px] lg:max-w-[470px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
